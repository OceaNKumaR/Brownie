const {  MessageEmbed } = require("discord.js");

module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react("❌");
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("❌ | " + titel)
      .setColor("#6F3917")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
