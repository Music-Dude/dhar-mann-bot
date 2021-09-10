const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token, presence, prefix } = require('./config.json');
const { people, actions, endings } = require('./words.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence(presence);
});

client.on('messageCreate', async msg => {
    // Remove empty words
    const words = msg.content.split(' ').filter(x => x);
    if(words[0] == prefix) {
        const args = words.slice(2);
        const command = client.commands.get(words[1]) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(words[1]));

        if (command)
            command(client, msg, args);
    }
    if (msg.content.toLowerCase().includes('dhar man')) {
        console.log(`Responded to ${msg.author.tag}`);
        const title = `${people[Math.floor(Math.random() * people.length)]} ${actions[Math.floor(Math.random() * actions.length)]} ${people[Math.floor(Math.random() * people.length)]}, ${endings[Math.floor(Math.random() * endings.length)]}!`;
        msg.reply(title);
    }
});

client.login(token);
