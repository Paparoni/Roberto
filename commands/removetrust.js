const fs = require("fs");
exports.execute = (Roberto, message, params, success, error, trusted) => {
    let user = message.mentions.members.first()
    if (message.author.id == '287808356779819008') {
        let new_trusted = trusted.splice(trusted.indexOf(user.id), 1);
        console.log(new_trusted)
        fs.writeFile('commands/trusted.txt', '', function() {
            console.log('done')
        })
        var logger = fs.createWriteStream('commands/trusted.txt', {
            flags: 'a' // 'a' means appending (old data will be preserved)
        })
        new_trusted.forEach(function(f) {
            logger.write(f+'\n')
        })
        logger.close()
        message.channel.send(`${message.author} took  away bot trust from ${user}.`)
    } else {
        message.channel.send('You don\'t have permission to use this command');

    }
}
