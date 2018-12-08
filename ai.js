exports.load = (AI) =>{
    AI.loadDirectory("AI", function(){
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
                let rep = AI.reply("local-user", message.content.toLowerCase().replace(Roberto.user.toString(), ""))
                    message.reply(rep);
            }
        }
}
