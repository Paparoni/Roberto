// Draws user avatar in a jack sparrow meme using python.
const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions[0] || message.author
    console.log(user)
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    drawScript = spawn('python', ['draw.py', 'sparrow', url]);
    drawScript.stdout.on('data', (data) => {
        message.channel.send('x', { files: ['./images/out.png'] });
    })
}
