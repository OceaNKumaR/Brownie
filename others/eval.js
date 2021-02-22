const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `eval`,
  description: `Evals the code`,
  aliases: ["e"],
  cooldown: 3,
  edesc: "UwU",
  execute(message, args, client) {



  
  function clean(text) {
    if (typeof text === "string")
        return text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
}
let owner = '494738882617933830'

if (!owner.includes(message.author.id)) return;

try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    message.react("✅");
    var emb = new MessageEmbed()
        .setTitle('Result')
        .setDescription(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``)
        .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setColor(0xd26a0e)
    message.channel.send(emb);
} catch (err) {
    message.react("⚠");
    var emb = new MessageEmbed()
        .setTitle('Result')
        .setDescription(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``)
        .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setColor(0xd26a0e)
    message.channel.send(emb);
}
}}
