

const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    if(msg.content === 'Good Boy') {
        msg.reply('Woof')
    }
})

client.login()