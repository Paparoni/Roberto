const Discord = require("discord.js");
const config = require("./config.js");
const Roberto = new Discord.Client();
const RiveScript = require("rivescript");
const Brain = new RiveScript();
const ai = require('./ai.js');
const Network = require('./network.js');
const spawn = require("child_process").spawn;
const fs = require("fs");
const editJsonFile = require("edit-json-file");



Roberto.login(config.token(process.env.TOKEN)).then(function() {
    ai.load(Brain);
    const python_modules = spawn('python', ["modules.py"]);
    python_modules.stdout.on('data', (data) => {
        console.log(data);
    });
    console.log("Roberto is now online.");
    Roberto.user.setPresence({
        game: {
            name: 'Being a Genius Bot',
            type: 'WATCHING'
        },
        status: 'idle'
    })
}, function(error) {
    console.error(error);
});
Network.connect(process.env.PORT || config.PORT);

// Trivia Game Stuff
var generatePattern = function(str) {
    let patt = new RegExp("(?<![^ ])" + str + "(?![^ ])")
    return patt
}
Roberto.on('message', message => {
    let file = editJsonFile(`${__dirname}/commands/reacts.json`);
    let reactJSON = file.toObject();
    Object.keys(reactJSON).forEach(function(key) {
        if (message.content.toLowerCase().includes(key)) {
            let pattern = generatePattern(key)
            if (pattern.test(message.content.toLowerCase())) {
                let emoji = reactJSON[key];
                try {
                    message.react(Roberto.emojis.get(emoji))
                } catch (error) {
                    console.log(error)
                }
            }
        }
    })
    // Roberto cannot talk to himself >:(
    if (message.author == Roberto.user) return;

    // Run AI script
    ai.run(Brain, Roberto, message)

    // Boolean whether or not the message starts with the command prefix
    var isCommand = (message.content.toLowerCase().charAt(0) == config.command_prefix) ? true : false
    if (isCommand) {
        let trusted_users = fs.readFileSync("commands/trusted.txt", 'utf-8');
        var trusted = trusted_users.split("\n");
        var isTrusted = function(user) {
            if (trusted.includes(user.id)) {
                return true;
            } else {
                return false;
            }
        }
        // console.log(trusted)
        // Sort the arguments into an array for easy access & get the command into a single variable
        var params = message.content.slice(config.command_prefix.length).trim().split(/ +/g),
            command = message.content.split(config.command_prefix).pop().split(' ').shift().toLowerCase();

        // Remove the command from the argument array
        params.splice(params.indexOf(command), 1);

        // Run the command asynchronously using a Promise
        var runCommand = new Promise(function(success, error) {
            var commandScript = require('./commands/' + command + '.js');
            commandScript.execute(Roberto, message, params, success, error, trusted, isTrusted, Discord);
        });

        runCommand.then(function(success) {}, function(error) {
            console.log("Command error: " + error);
        });

    } else {
        return;
    }
});
