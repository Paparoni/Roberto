exports.execute = (Roberto, message, params, success, error) => {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => {
                message.reply('Joined voice channel.');
            }, function(err){
                error(new Error(err));
            })
            
    } else {
        message.reply('You are not in a voice channel.');
    }
}
