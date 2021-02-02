const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['helppoll'],
    description: 'Info/Help command',
	run: async(client, message, args) => {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Poll Help')
        .setDescription('All poll commands and usage for them.')
        .setColor('#ff0000') //Use hash id to change
        .addField('poll:', 'Usage: (prefix)poll 1 (thing1) or (thing2)', true)
        let msg = await message.channel.send(helpEmbed);
        await msg.react('👍');
    }
}