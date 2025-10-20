//abaixo está criado o código que lerá o qrCode e irá parmencer logado na sessão
const { Client, LocalAuth} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Message = require('./messages');

const client = new Client ({
    AuthStrategy: new LocalAuth()  //aqui ele manterá a sessão ativa
});

//abaixo está o código que irá gera o QrCode
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

//abaixo de o código que dará inicio ao bot
client.once('ready', () => {
    console.log('Bot está Pronto!')
});

//Variáveis que armazenam o fluxo do atendimento guiado.
const userState = {};

//abaixo esta o código que irá captar as mensagens e responde-las
client.on('message', async (msg) => {
    const chatId = msg.from;
    const body = msg.body.trim().toLowerCase()

    if (body === 'menu') {
        userState[chatId] = 'menu';
        return client.sendMessage(chatId, Message.getMessage('10'));    
    }

    if (!userState[chatId]) {
        userState[chatId] = 'menu';
        return client.sendMessage(chatId, Message.getMessage(10));
    }

    if (userState[chatId] === 'menu') {
        return client.chatId.sendMessage(chatId, Message.getMessage(body));
        }
});



client.initialize();

