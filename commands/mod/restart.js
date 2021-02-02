module.exports =  {  
    aliases: ['Restart'],
    description: 'Restarts the Bot',
	run: async(client, message, args) => {   
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command') 
            try {
                const frames = ['□', '□□□□ 25%', '□□□□□□□□ 50', '□□□□□□□□□□□□ 75%', '□□□□□□□□□□□□□□□□ 100%'];

                const msg = await message.channel.send(`Restarting the bot...`);
                
                for (const frame of frames) {
                    setTimeout(() => {}, 4000);
                    await msg.edit({ embed: { description: frame, color: '#ff0000'}});
		        }
            } catch (err) {
                console.log(err.message);
            } finally {
                process.exit();
            } 
    }
} 