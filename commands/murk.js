// Distorts the user image
const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions.members.first().user || message.author
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    drawScript = spawn('py', ['draw.py', 'distort', url]);
    drawScript.stdout.on('data', (data) => {
        message.channel.send('', { files: ['./images/out-trans.png'] });
    })
}
