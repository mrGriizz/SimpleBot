const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['helpmod'],
    description: 'Info/Help command',
	run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command') 
        else {
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Fun Help')
            .setDescription('All mod commands and usage for them.')
            .setColor('#ff0000') //Use hash id to change
            .addField('Mute:', 'Usage: (prefix)mute @<name> (reason)', true)
            .addField('unmute:', 'Usage: (prefix)unmute @<name> (reason)', true)
            .addField('Kick:', 'Usage: (prefix)kick @<name> (reason)', true)
            .addField('Ban:', 'Usage: (prefix)ban @<name> (reason)', true)
            let msg = await message.channel.send(helpEmbed);
            await msg.react('👍');
        }
    }
}