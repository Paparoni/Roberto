var search = require('youtube-search');
exports.execute = (Roberto, message, params, success, error) => {
    let term = params.join(' ');
    var opts = {
        maxResults: 10,
        key: ''
    };
    search(term, opts, function(err, results) {
        if (err) return console.log(err);
        let rand = Math.floor(Math.random() * 11);
        message.channel.send(results[rand].link)
    });
}
