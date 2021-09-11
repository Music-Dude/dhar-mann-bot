/* globals client */

function add(msg) {
    let embed = {
        title: 'Add Dhar Mann to your server',
        description: `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=274877959232`,
        color: Math.floor(Math.random() * 16777215)
    };

    msg.reply({ embeds: [embed]});
}

module.exports = add;
module.exports.name = 'add';
module.exports.description = 'Get a link to add Dhar Man to your server';

