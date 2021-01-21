module.exports =  {  
    aliases: ['Restart'],
    description: 'Restarts the Bot',
	run: async(client, message, args) => {   
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