const Discord = require("discord.js");
const config = require("./config.js");
const Roberto = new Discord.Client();
const RiveScript = require("rivescript");
const Brain = new RiveScript();
const ai = require('./ai.js');
const Network = require('./network.js');
const spawn = require("child_process").spawn;

Roberto.login(config.token(process.env.TOKEN)).then(function() {
    ai.load(Brain);
    const python_modules = spawn('py',["modules.py"]);
    python_modules.stdout.on('data', (data) => {
        console.log(data);
    });
    console.log("Roberto is now online.");
}, function(error) {
    console.error(error);
});
Network.connect(process.env.PORT || config.PORT);

// Trivia Game Stuff
Roberto.on('message', message => {
    
})
Roberto.on('message', message => {
    // Roberto cannot talk to himself >:(
    if (message.author == Roberto.user) return;
    
    // Run AI script
    ai.run(Brain, Roberto, message)
    
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
            console.log("Command error: "+error);
        });
     
    } else {
        return;
    }
});
