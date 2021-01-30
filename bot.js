require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION', 'CHANNEL']});
const { registerCommands, registerEvents } = require('./utils/registry');

client.on('ready', () => {
    console.log(`Bot has logged in.`);
    client.user.setActivity('Your Messages!', { type: "WATCHING"})
    .catch(console.error);
});

const PREFIX = process.env.PREFIX;

(async () => {
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');
    
})();

client.login(process.env.BOT_TOKEN);
