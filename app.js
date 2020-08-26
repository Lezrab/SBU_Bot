const { Client, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client()

client.commands = new Collection()
client.mongoose = require('./utils/mongoose')
const { token } = require('./config')
require('./utils/functions')(client)

// Commands handler
fs.readdir('./events/', async(err, files) => {
    if (err) return console.error
    files.forEach(file => {
        if (!file.endsWith('.js')) return 
        const evt = require(`./events/${file}`)
        let evtName = file.split('.')[0]
        console.log(`Loaded event : ${evtName}.`)
        client.on(evtName, evt.bind(null, client))
    })
})

// Events handler
fs.readdir('./commands/', async(err, files) => {
    if (err) return console.error
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        let props = require(`./commands/${file}`)
        let cmdName = file.split('.')[0]
        console.log(`Loaded command : ${cmdName}.`)
        client.commands.set(cmdName, props)
    })
})

client.mongoose.init()
client.login(token)