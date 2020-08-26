module.exports = async (client, guild) => {
    try {
        const newGuild = {
            guildID: guild.id,
            guildName: guild.name
        }

        await client.createGuild(newGuild)
    } catch (error) {
        console.error(error)
    }
}