const { Message, Client } = require('discord.js')

module.exports=  {
    aliases: ['Unmute'],
    description: 'Unmutes Users',
    /**
     * @param {Message} message
     */
    run : async(client, message) => {
        let args = message.content.split(" ");
        let reason = args.slice(2).join(" ");
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');


        if(reason.length<1) {
            return message.channel.send('There is no reason provided.');
        } else {
            message.channel.send(`@${Member.displayName} has been unmuted for ${reason}.`);
            Member.roles.remove(role);
        }
    }
}