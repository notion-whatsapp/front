class Messages {
    dialogFlow = {
        'START': {
            messageKey: '10',
            text: null 
        },
        'ASK_PRODUCT': {
            message: 'Qual é o nome ou descrição do produto que você deseja adicionar?',
            field: 'produto',
            next: 'ASK_VALUE'
        },
        'ASK_VALUE': {
            message: 'Qual é o valor deste item? (ex: 150.00 ou 5.50)',
            field: 'valor',
            next: 'ASK_DATE'
        },
        'ASK_DATE': {
            message: 'Qual é a data da compra ou vencimento? (formato DD/MM/AAAA)',
            field: 'data',
            next: 'ASK_BUYER_NAME'
        },
        'ASK_BUYER_NAME': {
            message: 'qual é o nome do comprador ou cliente?',
            field: 'nome_comprador',
            next: 'CONFIRM'
        },
        'CONFIRM': {
            message: 'Obrigado! Recebi todos os dados. Confirmando: [PRODUTO], [VALOR], [DATA], [NOME]. Confirmar envio para o Notion? (Digite SIM ou N[NÃO])',
            field: 'confirmacao',
            next: 'FINISH'
        }
    };

    fixedMessages = {
        '0': 'opção inválida. Por favor, digite um número de 1 a 3 de acordo com o que você deseja.',
        '1': 'Ok! Qual é o nome ou descrição do produto/item que você deseja adicionar?',
        '2': 'Este bot foi desenvolvido para automatizar o processo de adicionar itens em uma planilha do Notion através do WhatsApp. Ele guia o usuário por um menu interativo, permitindo que ele escolha opções e forneça informações que serão registradas na planilha. O bot utiliza a API do WhatsApp para receber mensagens e responder de forma automática, facilitando a interação do usuário com o sistema.',
        '3': 'Aguarde um momento! um atendente humano irá te ajudar em breve.',
        '10': 'Olá! Bem-vindo ao arendimento automático: \n\n1 - adicionar um item à sua planilha\n2 - como funciona o bot?\n3 - falar com um atendente\n\nDigite a opção desejada!'
    };

    getFixedMessage(index = '0') {
        return this.fixedMessages[index] ?? this.fixedMessages['0'];
    }

    getStep(stepKey) {
        return this.dialogFlow[stepKey];
    }

    getFirstItemStep() {
        return 'ASK_PRODUCT';
    }
}

module.exports = new Messages();