const mongoose = require('mongoose')

module.exports = {
    init:() => {
        const dbOptions = {
            useNewUrlParser: false,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        }

        mongoose.connect('mongodb://localhost:27017/gcorpdb', dbOptions)
        mongoose.set('useFindAndModify', false)
        mongoose.Promise = global.Promise

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection : successfully opened !')
        })

        mongoose.connection.on('err', err => {
            console.log(`Mongoose connection error : \n${err.stack}`)
        })

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection : successfully closed !')
        })
    }
}