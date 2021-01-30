const { DiscordAPIError } = require("discord.js");
const discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const userCreatedPolls = new Map();
const PREFIX = process.env.PREFIX;

module.exports = {
    aliases: ['poll', 'createpoll', 'newpoll'],
    description: 'Creates Polls',
    run: async(client, message) => { 
        (message.deletable); {
            message.delete();
        }
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith(`${PREFIX}poll`)) {
            let args = message.content.split(" ");
            let question = args.slice(2).join(" ");
            let regex = new RegExp(/^([0-9]{2}|[0-9]{1})[sSmM]$/);
                const embed = new MessageEmbed()
                    .setTitle(question)
                    .setDescription('React with 👍 or 👎')
                    .setTimestamp();
                try {
                    const polls = new Map();
                    const userVotes = new Map();
                    let filter = (reaction, user) => {
                        if(user.bot) return false;
                        if(['👍', '👎'].includes(reaction.emoji.name)) {
                            if(polls.get(reaction.message.id).get(user.id))
                                return false;
                            else {
                                userVotes.set(user.id, reaction.emoji.name);
                                return true;
                            }
                        }
                    }
                    let msg = await message.channel.send(embed);
                    await msg.react('👍');
                    await msg.react('👎');
                }
                catch(err) {
                    console.log(err);
                }
            }
        }
    }

