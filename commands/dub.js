// Distorts the user image
const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions.members.first() || message.author
    user = user.user
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    console.log(url)
    let drawScript = spawn('py', ['draw.py', 'boom', url]);
    drawScript.stdout.on('data', (data) => {
        console.log(data.toString())
        message.channel.send('', { files: ['./images/out-boom.png'] });
    })
}
