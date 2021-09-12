/* globals client */

function add(msg) {
    let url = `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=274877959232`;
    let embed = {
        title: 'Add Dhar Mann to your server',
        description: url,
        color: Math.floor(Math.random() * 16777215)
    };

    let button = {
        type: 1,
        components: [
            {
                label: "Add Dhar Mann to your server!",
                type: 2,
                style: 5,
                url: url
            }
        ]
    };

    msg.reply({ embeds: [embed], components: [button] });
}

module.exports = add;
module.exports.name = 'add';
module.exports.description = 'Get a link to add Dhar Man to your server';

