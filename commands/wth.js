const spawn = require("child_process").spawn;
exports.execute = (Roberto, message, params, success, error) => {
    let user = message.mentions.members.first().user || message.author
    let url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;
    drawScript = spawn('py', ['draw.py', 'wth', url]);
    drawScript.stdout.on('data', (data) => {
        message.channel.send('', {
            files: ['./images/out.png']
        });
    })
}
