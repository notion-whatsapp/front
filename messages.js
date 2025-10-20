class Messages {
    Messages = {
    '0': 'opção inválida, por favor digite o número de 1 a 3 de acordo com o que você deseja.',
    '1': 'PROCESSO EM DESENVOLVIMENTO.',
    '2': 'Este bot foi desenvolvido para automatizar o processo de adicionar itens em uma planilha do Notion através do WhatsApp. Ele guia o usuário por um menu interativo, permitindo que ele escolha opções e forneça informações que serão registradas na planilha. O bot utiliza a API do WhatsApp para receber mensagens e responder de forma automática, facilitando a interação do usuário com o sistema.',
    '3': 'Aguarde um momento! um atendente irá falar com você em breve.',
    '10': `Olá! Bem-vindo ao atendimento automático:

    1 - adicionar um item à sua planilha
    2 - como funciona o bot?
    3 - falar com um atendente

    Digite a opção desejada!`
    }

    getMessage(index = 0) {
        return this.Messages[index] ?? this.Messages['0'];
    } 
}

module.exports = new Messages();