const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['info', 'help'],
    description: 'Info/Help command',
	run: async(client, message, args) => {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Info/Help')
        .setDescription('All commands in the server.')
        .setColor('#ff0000') //Use hash id to change
        .addField('Fun', 'Role', true)
        .addField('Poll', 'Poll, createpoll, newpoll',)
        .addField('Mod', 'ban, kick, mute, unmute, restart, stats, server-stats, server',) 
        .addField('Verify', 'Verify (Only used for unverified members)',) 
        let msg = await message.channel.send(helpEmbed);
        await msg.react('👍');
    }
}