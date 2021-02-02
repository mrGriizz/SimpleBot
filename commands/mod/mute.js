const {Message, MessageEmbed, DiscordAPIError, Client}= require('discord.js');
const ms = require('ms');

module.exports = {
  aliases: ['mute'],
  description: 'Mutes Users',
    /**
     * @param {Message} message
     */
    run: async(client, message) => {
        let args = message.content.split(" ");
        let reason = args.slice(2).join(" ");
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!Member) return message.channel.send('Member is not found.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let mutedRole = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(mutedRole.id)) return message.channel.send(`@${Member.displayName} has already been muted.`)
        if(reason.length<1) {
            return message.channel.send('There is no reason provided.');
        } else {
            message.channel.send(`@${Member.displayName} has been muted for ${reason}.`);
            Member.roles.add(mutedRole);
        }
    }
}