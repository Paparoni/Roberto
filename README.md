# Roberto
Yet another discord bot, cleaner, more efficient.<br/>
Created by: Aj <aj.yaboy@outlook.com><br/>
Computer Science Student
## Hosting
### Before you start
Roberto voice channel commands require the FFMPEG binary to be installed and the bin folder to be located in the root directory.</br>
You can find the download here: https://www.ffmpeg.org/download.html</br>

The drawing commands require python to be installed.</br>
You can find the download here: https://www.python.org/downloads/</br>


### Editing the config file
#### Before you begin hosting you have to edit the `config.js` file</br>

On line 1 change that value to your bot token which is found on the discord dev dashboard.</br>
`const __token__ = "SET BOT TOKEN HERE"`</br>

Alternatively you could create an environment variable named `TOKEN` and set that as your token instead.</br>
NOTE: Environment variables have priority, if an environemnt variable for TOKEN is defined the token inside of `config.js` becomes irrelevant.</br>

#### Next on line 2 you can change the port value as well, the default port is 3000
#### This must be a number
`const __PORT__ = "SET PORT HERE"`</br>

Alternatively you could create an environment variable named `PORT` and set that as your port instead.</br>
NOTE: Environment variables have priority, if an environemnt variable for PORT is defined the port inside of `config.js` becomes irrelevant.</br>

#### (OPTIONAL) You can change the command prefix as well</br>
Just replace the `~` on line 6</br>
`exports.command_prefix = "~"`</br>

### Running the bot
#### Now you are ready to install all the modules
Run `npm install`</br>
Then finally run `node Roberto.js`</br>

Once you begin hosting, after the first time the bot can be started by running `roberto.bat`

#### There you go you're hosting the bot.
