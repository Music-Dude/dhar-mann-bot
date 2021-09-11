/* globals client */

function ping(msg) {
    msg.reply({ embeds: [
        {
            title: 'Bot ping',
            description: `${client.ws.ping}ms`,
            color: Math.floor(Math.random() * 16777215)
        }
    ]});
}

module.exports = ping;
module.exports.name = 'ping';
module.exports.aliases = ['latency'];
module.exports.description = 'Get bot\'s connection latency to the Discord API';

