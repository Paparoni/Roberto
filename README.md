# Roberto
Yet another discord bot, cleaner, more efficient.
Created by: Aj <aj.yaboy@outlook.com>
Computer Science Student
## Hosting
### Before you start
#### Roberto voice channel commands require the FFMPEG binary to be installed and the bin folder to be located in the root directory.
#### You can find the download here: https://www.ffmpeg.org/download.html

### Editing the config file
#### Before you begin hosting you have to edit the `config.js` file

#### On line 1 change that value to your bot token which is found on the discord dev dashboard.
`const __token__ = "SET BOT TOKEN HERE"`
#### Alternatively you could create an environment variable named `TOKEN` and set that as your token instead.
##### NOTE: Environment variables have priority, if an environemnt variable for TOKEN is defined the token inside of `config.js` becomes irrelevant.

#### Next on line 2 you can change the port value as well, the default port is 3000
#### This must be a number
`const __PORT__ = "SET PORT HERE"`
#### Alternatively you could create an environment variable named `PORT` and set that as your token instead.
##### NOTE: Environment variables have priority, if an environemnt variable for PORT is defined the port inside of `config.js` becomes irrelevant.

#### (OPTIONAL) You can change the command prefix as well
#### Just replace the `~` on line 6
`exports.command_prefix = "~"`

### Running the bot
#### Now you are ready to install all the modules
#### Run `npm install`
#### Then finally run `node Roberto.js`
#### There you go you're hosting the bot.
