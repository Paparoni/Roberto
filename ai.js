exports.load = (AI) =>{
    AI.loadDirectory("AI").then(function(){
        AI.sortReplies();
        console.log("AI Brain loaded...")
    }, function(error){
        console.error(error);
    })
}
exports.run = (AI, Roberto, message) => {
 if (message.isMentioned(Roberto.user) == true) {
            if (message.author == Roberto.user) {
                return;
            } else {
                AI.reply("local-user", message.content.toLowerCase().replace(Roberto.user.toString(), "")).then(function(rep){
                    message.reply(rep);
                });

            }
        }
}
