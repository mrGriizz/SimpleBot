const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['helpowner'],
    description: 'Info/Help command',
	run: async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command') 
        else {
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Fun Help')
            .setDescription('All owner commands and usage for them.')
            .setColor('#ff0000') //Use hash id to change
            .addField('Restart:', 'Usage: (prefix)restart', true)
            let msg = await message.channel.send(helpEmbed);
            await msg.react('👍');
        }
    }
}