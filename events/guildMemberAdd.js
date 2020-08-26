module.exports = async (client, member) => {

    let userLogs = member.guild.channels.cache.find(c => c.name === 'user_logs')

    userLogs.send(`${member.user.username} joined**${member.guild}**!`)

    try {
        const newGuild = {
            guildID: member.guild.id,
            guildName: member.guild.name
        }

        const newProfile = {
            guildID: member.guild.id,
            guildName: member.guild.name,
            userID: member.user.id,
            username: member.user.username
        }

        await client.createGuild(newGuild)
        await client.createProfile(newProfile)
    } catch (error) {
        console.error(error)
    }
    
}