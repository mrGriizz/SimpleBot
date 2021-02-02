const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['helptickets'],
    description: 'Info/Help command',
	run: async(client, message, args) => {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Ticket Help')
        .setDescription('All poll commands and usage for them.')
        .setColor('#ff0000') //Use hash id to change
        .addField('Tickets:', `New ticket: ${PREFIX}new, End Ticket: ${PREFIX}end`, true)
        let msg = await message.channel.send(helpEmbed);
        await msg.react('👍');
    }
}