const Discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['Kick'],
    description: 'Kicks Members',
	run: async(client, message) => {
        let args = message.content.split(" ");
        let reason = args.slice(2).join(" ");
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('You do not have permissions to do this!');
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a member to ban!');

        if(reason.length<1) {
            return message.channel.send('There is no reason provided.');
        } else {
            (member.kickable); {
                member.kick();
            }
            message.channel.send(`@${member.displayName} has been kicked for ${reason}.`);
        }
    }
}