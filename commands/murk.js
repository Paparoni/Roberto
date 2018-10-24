// Distorts the user image
const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions[0] || message.author
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    drawScript = spawn('python', ['draw.py', 'distort', url]);
    drawScript.stdout.on('data', (data) => {
        console.log('called.')
        message.channel.send('', { files: ['./images/out-trans.jpg'] });
    })
}
