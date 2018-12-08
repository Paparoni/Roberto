const getJSON = require("get-json");
const Key = ''
exports.execute = (Roberto, message, params, success, error) => {
    let username = params[0]
    let task = params[1].toLowerCase();
    console.log(params[2])
    var period = (params[2] == undefined) ? 'overall' : params[2].toLowerCase();
    console.log(period)
    switch (task) {
        case 'topalbums':
            getJSON(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${Key}&format=json&period=${period}`, function(err, response) {
                if (err) {
                    error(err)
                } else {
                    if (response.topalbums == undefined) {
                        message.reply('Something went wrong chief.')
                    } else {
                        let a = response.topalbums.album
                        message.channel.send({
                            embed: {
                                color: 3447003,
                                author: {
                                    name: Roberto.user.username,
                                    icon_url: Roberto.user.avatarURL
                                },
                                description: `**Top albums for [${username}](http://www.last.fm/user/${username}) over the period of ${period}** \n \n1. [${a[0].name}](${a[0].url}) by **${a[0].artist.name}** (${a[0].playcount} plays)
                                        2. [${a[1].name}](${a[1].url}) by **${a[1].artist.name}** (${a[1].playcount} plays)
                                        3. [${a[2].name}](${a[2].url}) by **${a[2].artist.name}** (${a[2].playcount} plays)
                                        4. [${a[3].name}](${a[3].url}) by **${a[3].artist.name}** (${a[3].playcount} plays)
                                        5. [${a[4].name}](${a[4].url}) by **${a[4].artist.name}** (${a[4].playcount} plays)
                                        6. [${a[5].name}](${a[5].url}) by **${a[5].artist.name}** (${a[5].playcount} plays)
                                        7. [${a[6].name}](${a[6].url}) by **${a[6].artist.name}** (${a[6].playcount} plays)
                                        8. [${a[7].name}](${a[7].url}) by **${a[7].artist.name}** (${a[7].playcount} plays)
                                        9. [${a[8].name}](${a[8].url}) by **${a[8].artist.name}** (${a[8].playcount} plays)
                                        10. [${a[9].name}](${a[9].url}) by **${a[9].artist.name}** (${a[9].playcount} plays)`,

                                timestamp: new Date()
                            }
                        });
                    }
                }
            })
            break;
            case 'topartists':
                            getJSON(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${Key}&format=json&period=${period}`, function(err, response) {
                if (err) {
                    error(err)
                } else {
                    if (response.topartists == undefined) {
                        message.reply('Something went wrong chief.')
                    } else {
                        let a = response.topartists.artist
                        message.channel.send({
                            embed: {
                                color: 3447003,
                                author: {
                                    name: Roberto.user.username,
                                    icon_url: Roberto.user.avatarURL
                                },
                                description: `**Top artists for [${username}](http://www.last.fm/user/${username}) over the period of ${period}** \n \n1. [${a[0].name}](${a[0].url}) (${a[0].playcount} plays)
                                        2. [${a[1].name}](${a[1].url}) (${a[1].playcount} plays)
                                        3. [${a[2].name}](${a[2].url}) (${a[2].playcount} plays)
                                        4. [${a[3].name}](${a[3].url}) (${a[3].playcount} plays)
                                        5. [${a[4].name}](${a[4].url}) (${a[4].playcount} plays)
                                        6. [${a[5].name}](${a[5].url}) (${a[5].playcount} plays)
                                        7. [${a[6].name}](${a[6].url}) (${a[6].playcount} plays)
                                        8. [${a[7].name}](${a[7].url}) (${a[7].playcount} plays)
                                        9. [${a[8].name}](${a[8].url}) (${a[8].playcount} plays)
                                        10. [${a[9].name}](${a[9].url}) (${a[9].playcount} plays)`,

                                timestamp: new Date()
                            }
                        });
                    }
                }
            })
            break;
        case 'toptracks':
            getJSON(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${Key}&format=json&period=${period}`, function(err, response) {
                if (err) {
                    error(err)
                } else {
                    if (response.toptracks == undefined) {
                        message.reply('Something went wrong chief.')
                    } else {
                        let a = response.toptracks.track
                        message.channel.send({
                            embed: {
                                color: 3447003,
                                author: {
                                    name: Roberto.user.username,
                                    icon_url: Roberto.user.avatarURL
                                },
                                description: `**Top tracks for [${username}](http://www.last.fm/user/${username}) over the period of ${period}** \n \n1. [${a[0].name}](${a[0].url}) by **${a[0].artist.name}** (${a[0].playcount} plays)
                                        2. [${a[1].name}](${a[1].url}) by **${a[1].artist.name}** (${a[1].playcount} plays)
                                        3. [${a[2].name}](${a[2].url}) by **${a[2].artist.name}** (${a[2].playcount} plays)
                                        4. [${a[3].name}](${a[3].url}) by **${a[3].artist.name}** (${a[3].playcount} plays)
                                        5. [${a[4].name}](${a[4].url}) by **${a[4].artist.name}** (${a[4].playcount} plays)
                                        6. [${a[5].name}](${a[5].url}) by **${a[5].artist.name}** (${a[5].playcount} plays)
                                        7. [${a[6].name}](${a[6].url}) by **${a[6].artist.name}** (${a[6].playcount} plays)
                                        8. [${a[7].name}](${a[7].url}) by **${a[7].artist.name}** (${a[7].playcount} plays)
                                        9. [${a[8].name}](${a[8].url}) by **${a[8].artist.name}** (${a[8].playcount} plays)
                                        10. [${a[9].name}](${a[9].url}) by **${a[9].artist.name}** (${a[9].playcount} plays)`,

                                timestamp: new Date()
                            }
                        });
                    }
                }
            })
        break;
        default:
            message.reply('Sorry I need a proper task to search.')
    }
}
