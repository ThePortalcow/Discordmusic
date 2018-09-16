const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDkwNzc3NTY4NDQ2OTA2MzY5.DoAehQ.lCrlT1Zu2AF1hGsmjQbaxcPYpCQ);
