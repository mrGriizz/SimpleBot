const discord = require("discord.js");
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['ticket', 'new'],
    description: 'Creates Tickets',
    run: async(client, message, args) => { 
        (message.deletable); {
            message.delete();
        }

            if (!message.channel.name.startsWith(`tickets`)) //Can be whatever you want you ticket channel to be, but the channel name must start with whatever you choose
        return message.channel.send(`You cannot open a ticket outside of #tickets.`);

        const support = message.guild.channels.cache.find(channel => channel.name.toLowerCase() === `ticket-${message.author.tag}`.toLowerCase())
        if(support) {
                message.channel.send("You already have a open ticket");
        } else {
            message.guild.channels.create(`ticket-${message.author.tag}`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: message.author.id
                    },
                    
                    {
                        deny: 'VIEW_CHANNEL',
                        id: message.guild.id
                    },
                    ]
                })
                message.channel.send("Your ticket has now been created");
            }
    }

}

