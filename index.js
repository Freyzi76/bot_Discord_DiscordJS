const {CommandoClient} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-',
    owner: '693096160071778335',
    invite: 'https://discord.gg/eHZAcqJ9'
});


client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('music', 'Music')
    .registerCommandsIn(path.join(__dirname, 'commands'));




client.server = {
    queue: [],
    currentVideo: {title: "", url: ""},
    dispatcher: null,
};




client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`)
});

client.on('error', console.error);





client.login("OTEyNzM5NjY3MDQzMDI5MDMy.YZ0VDg.0v9Vz-v3NANQYPjAOtqQEXCm9tQ");

//https://nodejs.org/download/release/v14.16.1/