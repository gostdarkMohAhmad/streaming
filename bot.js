const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("456134809484263447")
setInterval(function() {
channel.send(`***الفلوووس تغير النفووس-ez-Credit-RedShadow***`);
}, 25)
})
 
 
client.login('process.env.BOT_TOKEN');
