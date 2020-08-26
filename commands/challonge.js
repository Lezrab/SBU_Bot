const challonge = require('challonge')
const { challongeKey } = require('../config')
exports.run = async (client, message, args) => {
    const challongeClient = challonge.createClient({
        apiKey: challongeKey
    })

    challongeClient.tournaments.index({
        callback: (err, data) => {
            //console.log(err, data)
            //message.channel.send(data[0].tournament.name)
            var obj = JSON.parse(data)
            console.log(obj)
        }
    })

    
}

exports.help = {
    name: "challonge"
}