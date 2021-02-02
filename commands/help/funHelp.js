const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['helpfun'],
    description: 'Info/Help command',
	run: async(client, message, args) => {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Fun Help')
        .setDescription('All fun commands and usage for them.')
        .setColor('#ff0000') //Use hash id to change
        .addField('Roll:', 'Usage: (prefix)roll', true)
        let msg = await message.channel.send(helpEmbed);
        await msg.react('👍');
    }
}