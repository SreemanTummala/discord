
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});
client.on("guildMemberAdd", (member) => {
  const defaultChannel =member.guild.channels.cache.find(channel => channel.name==="general");
  var i=0;
  
    defaultChannel.send("hi "+member.user.username+ " welcome to the UTDCS discord server");
    return;  
  
});
client.on("guildMemberRemove", (member) => {
  const defaultChannel =member.guild.channels.cache.find(channel => channel.name==="general");
  defaultChannel.send("bye "+member.user.username+ " good luck at utd(if you are going there ig)");
    return;  
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  console.log(message.id);
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  if(message.content==='hola')
  {
  message.channel.send("hi");
  return;
  }
});
client.login(process.env.TOKEN);
