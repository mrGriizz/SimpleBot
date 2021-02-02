const discord = require("discord.js");
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['end'],
    description: 'Deletes Tickets',
    run: async(client, message, args) => { 
        const support = message.guild.channels.cache.find(channel => channel.name.toLowerCase() === `ticket-${message.author.tag}`.toLowerCase())
        if (!message.channel.name.startsWith(`ticket`)) 
            return message.channel.send(`You can't use the close command outside of your support channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`${PREFIX}yes\`. This will time out in 10 seconds and be cancelled.`)
        .then((m) => {
          message.channel.awaitMessages(response => response.content === `${PREFIX}yes`, {
            max: 1,
            time: 10000,
            errors: ['time'],
          })
          .then((collected) => {
              message.channel.delete();
            })
            .catch(() => {
              m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                  m2.delete();
              }, 3000);
            });
        });
    }

}

