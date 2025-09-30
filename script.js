

const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})


client.on('messageCreate', async msg => {
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() === 'good boy') {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            msg.reply(data.message);
        } catch (error) {
            msg.reply('Could not fetch a dog picture right now.');
        }
    }
});

client.login(process.env.TOKEN)

