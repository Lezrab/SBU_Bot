const { prefix } = require('../config')

module.exports = async (client, message) => {

    if (message.member.id === "728971481387761704" || message.member.id === "201503408652419073" || message.member.id === "324631108731928587" || message.member.id === "409016661983887380") return
    if (!(message.content.startsWith('!'))) {
        try {
        } catch (err) {
            console.error(err)
        }
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()

        const cmd = client.commands.get(command)
        if (!cmd) return

        cmd.run(client, message, args)
    }

    else if (message.content.startsWith('!')) {
        try {
        } catch (err) {
            console.error(err)
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()

        const cmd = client.commands.get(command)
        if (!cmd) return

        cmd.run(client, message, args)
    } 

    else {
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
    
        const cmd = client.commands.get(command)
        if (!cmd) return
    
        cmd.run(client, message, args)
    }
}

async function updateCoins(client, member, amount) {
    const profile = await client.getProfile(member)
    const newAmount = profile ? profile.coins + amount : amount
    if (!profile) return
    else await client.updateProfileWithUsername(profile.username, { coins: newAmount })
}

async function updateLvl(client, member) {
    const profile = await client.getProfile(member)
    const lvlStages = { "one": 10, "two": 25, "three": 50, "four": 100, "five": 175, "six": 275, "seven": 400, "eight": 600, "nine": 850, "ten": 1200, "eleven": 2000 }
    let exp = 0
    if (!profile) return
    else {
        exp = profile.exp
        if (exp >= 0 && exp <= parseInt(lvlStages["one"])) await client.updateProfileWithUsername(profile.username, { level: 1 })
        if (exp > 10 && exp <= parseInt(lvlStages["two"])) await client.updateProfileWithUsername(profile.username, { level: 2 })
        if (exp > 25 && exp <= parseInt(lvlStages["three"])) await client.updateProfileWithUsername(profile.username, { level: 3 })
        if (exp > 50 && exp <= parseInt(lvlStages["four"])) await client.updateProfileWithUsername(profile.username, { level: 4 })
        if (exp > 100 && exp <= parseInt(lvlStages["five"])) await client.updateProfileWithUsername(profile.username, { level: 5 })
        if (exp > 175 && exp <= parseInt(lvlStages["six"])) await client.updateProfileWithUsername(profile.username, { level: 6 })
        if (exp > 275 && exp <= parseInt(lvlStages["seven"])) await client.updateProfileWithUsername(profile.username, { level: 7 })
        if (exp > 400 && exp <= parseInt(lvlStages["eight"])) await client.updateProfileWithUsername(profile.username, { level: 8 })
        if (exp > 600 && exp <= parseInt(lvlStages["nine"])) await client.updateProfileWithUsername(profile.username, { level: 9 })
        if (exp > 850 && exp <= parseInt(lvlStages["ten"])) await client.updateProfileWithUsername(profile.username, { level: 10 })
        if (exp > 1200 && exp <= parseInt(lvlStages["eleven"])) await client.updateProfileWithUsername(profile.username, { level: 11 })
        if (exp > 2000 && exp <= parseInt(lvlStages["twelve"])) await client.updateProfileWithUsername(profile.username, { level: 12 })
        else return 
    }
}