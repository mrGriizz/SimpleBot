const Discord = require('discord.js');
const prefix = '!'

module.exports = {
    aliases: ['Ban'],
    description: 'Bans Members',
	run: async(client, message, args) => {
        var args = Array.prototype.slice.call(arguments);
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('You do not have permissions to do this!');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to ban!');

        await Member.ban({ reason: args.slice(1).join(" ")});  
        message.channel.send(`${Member.user.tag} was banned from ${Member.guild.name}`);
    }
}