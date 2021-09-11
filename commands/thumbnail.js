/* globals ytApiKey https */

function thumbnail(msg, args) {
    const options = {
        hostname: 'www.googleapis.com',
        port: 443,
        path: `/youtube/v3/search?key=${ytApiKey}&channelId=UC_hK9fOxyy_TM8FJGXIyG8Q&part=snippet,id&order=date&maxResults=100`,
        method: 'GET'
    };

    https.request(options, res => {
        let body = '';
        if (res.statusCode != 200) {
            return msg.reply('Failed to fetch Dhar Mann thumbnail! This may be caused by an invalid Youtube API key in the config.\nSTATUS CODE: ' + res.statusCode);
        }

        res.on('data', d => {
            body += d;
        });

        res.on('end', () => {
            const json = JSON.parse(body);
            msg.reply(json.items[Math.floor(Math.random() * json.items.length)].snippet.thumbnails.high.url);
        });
    }).end();
}

module.exports = thumbnail;
module.exports.name = 'thumbnail';
module.exports.description = 'Send a random Dhar Mann thumbnail';

