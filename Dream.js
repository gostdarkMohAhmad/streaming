const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("456134809484263447")
setInterval(function() {
channel.send(`***الفلوووس تغير النفووس***`);
}, 25)
})
 
 
client.login('NDgzMzYwMDQ3NTQ4NzI3Mjk2.DsYBuA.xY8eEx4Y-Cwrfv4W-z-EhaH77C8');