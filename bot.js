require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log('Locked and loaded!!!!')
})

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.channel.send("Pong!")
		msg.reply("Pong!")
	}
})

// Grabs the token from the .env file via dotenv package
client.login(process.env.AWESOME_BOT_TOKEN)