exports.execute = (Roberto, message, params, success, error) => {
    var sound_name = params[0];
    var soundFile;
    switch (sound_name) {

        case 'bruh':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/269/original/bruh?1469744327'
            break;
        case 'skinnypenis':
            soundFile = 'https://sound.peal.io/ps/audios/000/002/147/original/youtube.mp3?1493768525'
            break;
        case 'crackkid':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/271/original/crack_kid?1469744465'
            break;
        case 'apotato':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/262/original/a_potato_flew_around_my_room?1469744409'
            break;
        case 'aladdin':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/009/original/show-the-world.wav?1469744355'
            break;
        case 'deeznuts':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/385/original/deeznuts.wav?1469744459'
            break;
        case 'cantbelieve':
            soundFile = 'https://sound.peal.io/ps/audios/000/005/317/original/youtube.mp3?1511269037'
            break;
        case 'hellnaw':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/375/original/When_your_ex_texts_34__Do_you_miss_me_34_.mp3?1469744407'
            break;
        case 'iwannadie':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/713/original/If_I_were_to_die.mp3?1469744405'
            break;
        case 'beakfast':
            soundFile = 'https://sound.peal.io/ps/audios/000/001/342/original/youtube.mp3?1485216239';
            break;
        case 'jamaican':
            soundFile = 'https://sound.peal.io/ps/audios/000/006/352/original/youtube.mp3?1513925197'
            break;
        case 'churchgirl':
            soundFile = 'https://sound.peal.io/ps/audios/000/006/353/original/youtube.mp3?1513925346'
            break;
        case 'dudewtf':
            soundFile = 'https://sound.peal.io/ps/audios/000/006/354/original/youtube.mp3?1513925423'
            break;
        case 'kamehameha':
            soundFile = 'https://sound.peal.io/ps/audios/000/000/027/original/kamehameha.wav?1469744249'
            break;
        default:
            message.reply('Sorry could not find that sound byte.');
    }
    message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playArbitraryInput(soundFile);
        }, function(err){
            error(new Error(err));
        });
}
