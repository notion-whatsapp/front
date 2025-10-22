const Messages = require('./messages');
const userSessions = {};

function sendMessage(userPhone, message) {
    console.log(`\n[BOT para ${userPhone} (PASSO: ${userSessions[userPhone].currentStep})]:`);
    console.log(message);
}

async function enviarParaNotion(dados) {
    console.log('\n--- Tentando enviar para o Notion ---'); 
    console.log('Dados a serem enviados:', dados);
    return true;
}

async function handleMessage(userPhone, userMessage) {
    const defaultSession = { currentStep: 'START', formData: {} };
    let session = userSessions[userPhone] || defaultSession;

    const messageText = userMessage.trim().toUpperCase();

    if (session.currentStep === 'START') {
        switch (messageText) {
            case '1':
                session.currentStep = Messages.getFirstItemStep();
                userSessions[userPhone] = session;
                return sendMessage(userPhone, Messages.getFixedMessage('1'));
            
            case '2': 
                return sendMessage(userPhone, Messages.getFixedMessage('2'));
            
            case '3': 
                return sendMessage(userPhone, Messages.getFixedMessage('3'));
            
            default:
                return sendMessage(userPhone, Messages.getFixedMessage('10'));
        }
    } else if (session.currentStep && session.currentStep !== 'FINISH') {
        const currentStepData = Messages.getStep(session.currentStep);

        if (session.currentStep === 'CONFIRM') {
            if (messageText === 'SIM') {
                const sucesso = await enviarParaNotion(session.formData);

                if (sucesso) {
                    userSessions[userPhone] = defaultSession;
                    return sendMessage(userPhone, "Item adicionado com sucesso à sua planilha no Notion! Voltando para o menu principal...");
                } else {
                    return sendMessage(userPhone, "Houve um erro ao adicionar o item ao Notion. Por favor, tente novamente mais tarde.");
                } 

            } else if (messageText === 'NÃO' || messageText === 'NAO') {
                userSessions[userPhone] = defaultSession;
                return sendMessage(userPhone, "Envio cancelado. Voltando para o menu principal...");        
            } else {
            return sendMessage(userPhone, "Opção inválida. Por favor, Responda com SIM ou NÃO.");
        }
        }

        const fieldToSave = currentStepData.field;
        session.formData[fieldToSave] = userMessage.trim();

        session.currentStep = currentStepData.next;
        userSessions[userPhone] = session;

        const nextStepData = Messages.getStep(session.currentStep);

        let responseMessage = nextStepData.message;

        if (session.currentStep === 'CONFIRM') {
            responseMessage = responseMessage
                .replace('[PRODUTO]', session.formData.produto)
                .replace('[VALOR]', session.formData.valor)
                .replace('[DATA]', session.formData.data)
                .replace('[NOME]', session.formData.nome_comprador);
        }

        return sendMessage(userPhone, responseMessage);

    }
}