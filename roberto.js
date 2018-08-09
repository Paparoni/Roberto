const Discord = require("discord.js");
const config = require("./config.js");

const Roberto = new Discord.Client();

Roberto.login(config.token).then(function() {
    console.log("Roberto is now online.");
}, function(error) {
    console.error(error);
})

Roberto.on('message', message => {
    // Roberto cannot talk to himself >:(
    if (message.author == Roberto.user) return;

    var isCommand = (message.content.toLowerCase().charAt(0) == config.command_prefix) ? true : false;

    if (isCommand) {
        var params = message.content.slice(config.command_prefix.length).trim().split(/ +/g),
            command = message.content.split(config.command_prefix).pop().split(' ').shift().toLowerCase();
        params.splice(params.indexOf(command), 1);

        var runCommand = new Promise(function(success, error) {
            var commandScript = require('./commands/' + command + '.js');
            commandScript.execute(Roberto, message, params, success, error);
        })
        runCommand.then(function(success) {}, function(error) {
            console.log(error)
        });
    } else {
        return;
    }
});