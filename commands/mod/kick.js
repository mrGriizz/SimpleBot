const { MessageEmbed, DiscordAPIError, MessageManager } = require(`discord.js`);

module.exports = {
    aliases: ['Kick'],
    description: 'Kicks Users',
	run: async(client, message, args) => {
        var args = Array.prototype.slice.call(arguments);
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('You do not have permissions to do this!');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to kick!');

        await Member.kick({ reason: args.slice(1).join(" ")});  
        message.channel.send(`${Member.user.tag} was kicked from ${Member.guild.name}`);
    }
}