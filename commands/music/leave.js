const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class LeaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            aliases: ['l'],
            group: 'music',
            memberName: 'leave',
            description: 'music player',
            
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    

    async run(message) {

        var server = message.client.server;

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) {
            return message.say(':x: Tu n\'est pas dans un channel')
        }
        

        server.queue = [];
        server.currentVideo = {title: "", url: ""};

        await voiceChannel.leave();

        return message.say(":thumbsup: Ok je m'en vais")
    }





}