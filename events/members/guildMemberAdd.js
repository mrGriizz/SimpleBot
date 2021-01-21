const Discord = require('discord.js');

module.exports = (guildMemberAdd, member) => {
    const memberRole = member.guild.roles.cache.find(role => role.name === "Unverified");

    member.roles.add(memberRole)
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    //channel.send(`${user.displayAvatarURL}`);
    channel.send(`${member} Has joined ${member.guild.name}.`);
    console.log('Guild member add was registered.');
};