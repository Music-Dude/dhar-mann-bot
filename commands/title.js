/* globals genTitle */

function title(msg) {
    let embed = {
        title: 'Dhar Mann Title',
        description: genTitle(),
        color: Math.floor(Math.random() * 16777215)
    };

    msg.reply({ embeds: [embed]});
}

module.exports = title;
module.exports.name = 'title';
module.exports.description = 'Generate Dhar Mann title';

