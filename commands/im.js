var Bing = require('node-bing-api')({
    accKey: ""
});
const fs = require("fs");

/*let bannedWordsFile = fs.readFileSync("commands/bannedwords.txt", 'utf8');
var bannedWords = bannedWordsFile.split("\n")
var isBanned = function(search) {
    bannedWords.forEach(function(f) {
        if (search.toLowerCase().includes(f) || f == search) {
            return true
        } else {
            return false
        }
    })
}
*/
exports.execute = (Roberto, message, params, success, error, Discord) => {
    let search = params.join(" ")
    Bing.images(search, {
        count: 50,
        offset: 0 
    }, function(error, res, body) {
        let myUrl = (body.value[1] !== undefined) ? body.value[Math.floor(Math.random() * 50) + 0].contentUrl : "https://i.imgur.com/rDdgZTZ.jpg"
        message.channel.send({
            embed: {
                "image": {
                    "url": myUrl
                }
            }
        }).then(function(message){
            message.react('')
            message.react('')
        })
    });


}
