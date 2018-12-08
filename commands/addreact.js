const editJsonFile = require("edit-json-file");

exports.execute = (Roberto, message, params, success, error, trusted, isTrusted) => {
    let term = params[0]
    let emote = params[1]
    let file = editJsonFile(`${__dirname}/reacts.json`);
    if(isTrusted(message.author)){
        file.set(term, emote);
        message.channel.send(`${message.author} set ${term} to be reacted with ${Roberto.emojis.get(emote)}.`);
        file.save()
    } else {
        message.reply('You need to have bot trust to use this command.')
    }
}
