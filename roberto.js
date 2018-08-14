const Discord = require("discord.js");
const config = require("./config.js");
const Roberto = new Discord.Client();
const RiveScript = require("rivescript");
const Brain = new RiveScript();
const ai = require('./ai.js');
const Network = require('./network.js');

Roberto.login(config.token(process.env.TOKEN)).then(function() {
    ai.load(Brain);
    console.log("Roberto is now online.");
}, function(error) {
    console.error(error);
});
Network.connect(process.env.PORT || 3000);

// ai
Roberto.on('message', message => {
    ai.run(Brain, Roberto, message)
})

Roberto.on('message', message => {
    // Roberto cannot talk to himself >:(
    if (message.author == Roberto.user) return;

    // Boolean whether or not the message starts with the command prefix
    var isCommand = (message.content.toLowerCase().charAt(0) == config.command_prefix) ? true : false;

    if (isCommand) {
        // Sort the arguments into an array for easy access & get the command into a single variable
        var params = message.content.slice(config.command_prefix.length).trim().split(/ +/g),
            command = message.content.split(config.command_prefix).pop().split(' ').shift().toLowerCase();

        // Remove the command from the argument array
        params.splice(params.indexOf(command), 1);

        // Run the command asynchronously using a Promise
        var runCommand = new Promise(function(success, error) {
            var commandScript = require('./commands/' + command + '.js');
            commandScript.execute(Roberto, message, params, success, error);
        });

        runCommand.then(function(success) {}, function(error) {
            console.log("Command error: " + error);
        });

    } else {
        return;
    }
});
