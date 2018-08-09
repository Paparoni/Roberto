const getJSON = require("get-json");

exports.execute = (Roberto, message, params, success, error) => {
    var word = params[0];
    getJSON("http://api.urbandictionary.com/v0/define?term=" + word, function(err, c) {
        if (err) {
            error(new Error(err));

        } else {
            if (c.list[0] == undefined) {
                message.reply("Eh... I don\' think that\'s a word...");
            } else {
                var getword = c.list[0].word,
                    word = getword.charAt(0).toUpperCase() + getword.substring(1),
                    definition = c.list[0].definition,
                    out = "" + word + ": " + definition;

                message.reply(out);
            }

        }
    });
}
