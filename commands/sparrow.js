// Draws user avatar in a jack sparrow meme using python.
const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions.members.first().user || message.author
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    drawScript = spawn('py', ['draw.py', 'sparrow', url]);
    drawScript.stdout.on('data', (data) => {
        message.channel.send('', {
            files: ['./images/out.png']
        });
    })
}
