exports.run = async (client, message, args) => {
    const resp = args.join(' ')
    message.delete()
    if (isNaN(resp)) {
        message.channel.send('Please enter a number.')
    } else if (resp <= 100 && resp > 0) {
        message.channel.bulkDelete(resp)
        .then(out => message.channel.send(resp+" messages were deleted!"))
        .catch(error => message.channel.send(`Error: ${error}`))
    } else if (resp < 1 || resp > 100) {
        message.channel.send('Deleting messages : number must be between 1 and 100 (inclusive).')
    }
}

exports.help = {
    name: "purge"
}