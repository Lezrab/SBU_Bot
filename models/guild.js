const mongoose = require('mongoose')
const { defaultSettings : defaults } = require('../config')

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        type: String,
        default: defaults.prefix
    },
    welcomeChannel: {
        type: String,
        default: defaults.welcomeChannel
    },
    welcomeMsg: {
        type: String,
        defaults: defaults.welcomeMsg
    },
    modRole: {
        type: String,
        default: defaults.modRole
    },
    adminRole: {
        type: String,
        default: defaults.adminRole
    }
})

module.exports = mongoose.model('Guild', guildSchema)