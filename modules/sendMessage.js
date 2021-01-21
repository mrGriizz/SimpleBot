module.exports = async function sendMessage(client, channel, content) {
    client.guilds.cache.map((g) => {
      try { //get channel either by ID or name and send the content! 
        g.channels.cache.find((ch) => ch.id == channel || ch.name == channel).send(content);
      } catch (e) {
        return;
      }
    });
  }