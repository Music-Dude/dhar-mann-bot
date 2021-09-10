function help(client, msg, args) {
    let embed = {
        title: 'Dhar Mann',
        fields: [],
        color: Math.floor(Math.random() * 16777215)
    };
    for (const command of client.commands.values())
    {
        if (command.aliases) 
            embed.fields.push({ name: command.name, value: `*${command.description}*\nAliases: \`${command.aliases.join('\`, \`')}\`` });
        else
            embed.fields.push({ name: command.name, value: `*${command.description}*` });
    }

    msg.reply({ embeds: [embed ]});
}

module.exports = help;
module.exports.name = 'help';
module.exports.description = 'Show this help menu';

