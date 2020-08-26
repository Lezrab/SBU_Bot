require('dotenv-flow').config()

module.exports = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX,
	challongeKey: process.env.API_CHALLONGE,
    defaultSettings: {
        prefix: process.env.PREFIX,
        welcomeChannel: '',
        welcomeMsg: '',
        modRole: '',
        adminRole: ''
    }
}