const fs = require("fs");
exports.execute = (Roberto, message, params, success, error) => {
    if(message.author.id == '287808356779819008'){
        let user = message.mentions.members.first();
        fs.appendFile('commands/trusted.txt', '\n'+user.id+'\n', function(err) {
            if (err) {
                error(err)
            } else {
                message.channel.send(`${message.author} trusted ${user} with bot permissions.`);
            }
        })
    }else {
            message.channel.send('You don\'t have permission to use this command');
    }
}
