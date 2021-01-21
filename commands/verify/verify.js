module.exports = {
    aliases: ['verify'],
    description: 'Verify\'s users.',
    run: async(client, message) => {
        if(message.author.bot) return;
    if(message.content.toLowerCase() === '!verify' && message.channel.id === '795842022334136393')
    {   
         await message.delete().catch(err => console.log(err));
        const addrole = message.guild.roles.cache.get('719313714779783259');
        if(addrole) {
            try {
                await message.member.roles.add(addrole);
                console.log("Role added!");
            }
            catch(err) {
                console.log(err);
            }
        }
        const delrole = message.guild.roles.cache.get('795842078709514241');
        if(delrole) {
            try {
                await message.member.roles.remove(delrole);
                console.log("Role removed!");
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}
}