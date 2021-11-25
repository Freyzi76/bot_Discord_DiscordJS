const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['j'],
            group: 'music',
            memberName: 'join',
            description: 'music player',
            
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) {
            return message.say(':x: Tu n\'est pas dans un channel')
        }

        await voiceChannel.join();

        return message.say(":thumbsup: Je suis la")
    }





}