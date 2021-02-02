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
        .addField('Fun', 'Roll', 'Ping', `${PREFIX}helpfun`, true)
        .addField('Poll', 'Poll, createpoll, newpoll', `${PREFIX}helppoll`, )
        .addField('Mod', '(prefix)helpmod',) 
        .addField('Verify', 'Verify (Only used for unverified members)',)
        .addField('Tickets', 'new, end', `${PREFIX}helptickets`,) 
        let msg = await message.channel.send(helpEmbed);
        await msg.react('👍');
    }
}