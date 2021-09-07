const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { people, actions, endings } = require('./words.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async msg => {
    if (msg.content.toLowerCase().includes('dhar man')) {
        console.log(`Responded to ${msg.author.username}#${msg.author.discriminator}`);
        const title = `${people[Math.floor(Math.random() * people.length)]} ${actions[Math.floor(Math.random() * actions.length)]} ${people[Math.floor(Math.random() * people.length)]}, ${endings[Math.floor(Math.random() * endings.length)]}!`;
        msg.reply(title)
            .catch(console.error);
    }
});

client.login(token);
