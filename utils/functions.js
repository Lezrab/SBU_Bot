const mongoose = require('mongoose')
const { Profile, Guild } = require('../models')

module.exports = client => {

    client.getGuild = async guild => {
        let data = await Guild.findOne({ guildID: guild.id })
        if (data) return data
        else return client.config.defaultSettings
    }

    client.updateGuild = async (guild, settings) => {
        let data = await client.getGuild(guild)

        if (typeof data != 'object') data = {}
        for (const key in settings) {
            // eslint-disable-next-line no-prototype-builtins
            if (settings.hasOwnProperty(key)) {
                if (data[key] != settings[key]) data[key] = settings[key]
                else return
            }
        }

        console.log(`Guild "${data.guildName}" (${data.guildID}) updated settings: ${Object.keys(settings)}`)
        return await data.updateOne(settings)
    }

    client.createGuild = async settings => {
        let merged = Object.assign({_id: mongoose.Types.ObjectId() }, settings)

        const newGuild = await new Guild(merged)
        console.log("abcedf")
        return newGuild.save()
            .then(g => {
                console.log(`Default settings saved for guild "${g.guildName}" (${g.guildID})`)
            })

    }

    client.clean = async (client, text) => {
        if (text && text.constructor.name == 'Promise') text = await text
        if (typeof evaled != 'string') {
            text = require('util').inspect(text, {
                depth: 1
            })
        }

        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
            .replace(client.token, '')
    }

    client.createProfile = async profile => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, profile)

        const newProfile = await new Profile(merged)
        return newProfile.save()
            .then(console.log(`New profile saved for user "${merged.username}" (${merged.userID})`))
    }

    client.getProfile = async user => {
        const data = await Profile.findOne({ userID : user.id })
        if (data) return data
        else return
    }

    client.getProfileWithId = async id => {
        const data = await Profile.findOne({ userID: id })
        if (data) return data
        else return
    }

    client.getProfileWithUsername = async username => {
        const data = await Profile.findOne({ username: username })
        if (data) return data
        else return
    }

    client.updateProfile = async (user, data) => {
        let profile = await client.getProfile(user)

        if (typeof profile != 'object') profile = {}
        for (const key in data) {
            if (profile[key] != data[key]) profile[key] = data[key]
            else return
        }

        console.log(`Profile "${profile.username}" (${profile.userID}) updated: ${Object.keys(data)}`)
        return await profile.updateOne(profile)
    }

    client.updateProfileWithUsername = async (username, data) => {
        let profile = await client.getProfileWithUsername(username)
        
        if (typeof profile != 'object') profile = {}
        for (const key in data) {
            if (profile[key] != data[key]) profile[key] = data[key]
            else return
        }
        return await profile.updateOne(profile)
    }
}