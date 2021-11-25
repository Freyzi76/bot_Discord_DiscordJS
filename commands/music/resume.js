const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class ResumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'resume',
            aliases: ['r'],
            group: 'music',
            memberName: 'resume',
            description: 'music player',
            
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {

        /**
         * @type StreamDispatcher
         */

        const dispatcher = message.client.server.dispatcher;

        if(!message.member.voice.channel) {
            return message.say(':x: Tu n\'est pas dans un channel')
        }
    

        if (dispatcher) {
            dispatcher.resume();
        }

        return message.say(":pause_button: Resume :thumbsup:")
    }





}