const editJsonFile = require("edit-json-file");

exports.execute = (Roberto, message, params, success, error, trusted, isTrusted) => {
    let term = params[0]
    let file = editJsonFile(`${__dirname}/reacts.json`);
    if(isTrusted(message.author)){
        file.unset(term)
        message.channel.send(`${message.author} removed the reaction for ${term}.`);
        file.save()
    } else {
        message.reply('You need to have bot trust to use this command.')
    }
}
