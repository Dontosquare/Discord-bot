

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
    if (msg.content.toLowerCase() === 'pspsps') {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': process.env.CAT_API_KEY
            }
        });
        const data = await response.json();
        msg.reply(data[0].url);
    } catch (error) {
        msg.reply('Could not fetch a cat picture right now.');
    }
}
});


client.login(process.env.TOKEN);

