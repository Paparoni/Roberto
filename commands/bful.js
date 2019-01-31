const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions.members.first().user || message.author
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    drawScript = spawn('python', ['draw.py', 'bful', url]);
    drawScript.stdout.on('data', (data) => {
        message.channel.send('', {
            files: ['./images/out-bful.png']
        });
    })
}
