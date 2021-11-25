const { MessageEmbed, VoiceConnecion } = require("discord.js");
const { Command, CommandoMessage } = require("discord.js-commando");



const DA = require("../../deezerApp/player");

console.log(DA);


//const DeezerPlayer = require("https://e-cdns-files.dzcdn.net/js/min/dz-v00401525.js");

//const deezer = new DeezerPublicApi();

/**
 * @param {CommandoMessage} message
 * @param {String} query
*/


module.exports = class PlayDCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'playd',
            aliases: ['pd'],
            group: 'music',
            memberName: 'playd',
            description: 'music player',
        });
    }

    
    async run(message) {


        var embed = new MessageEmbed()
            .setTitle(`File d'attente pour`)
            .setColor("BLUE")
            .addField(site);



        return message.say(embed);

    }

}