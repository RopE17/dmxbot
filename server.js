const rope = require("aoi.js")
var fs = require('fs');
const bot = new rope.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  mobile: false,
  fetchInvites: true
})
bot.onLeave()
bot.onJoined()
bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

//komutları aşağıya yazın



















//komutları Yukarıya yazın

//variablelar
bot.variables({
  prefix:"-"
})




//Bot Durum
bot.status({
  text: "31",
  type: "PLAYING",
  status: "online",
  time: 7  
})
