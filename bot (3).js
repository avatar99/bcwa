const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = '$'

const developers = ["557181389100023839,157594020439261184"]// ايدي الاونر 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.on("message", message => {//bc2
 
  if (message.content.startsWith(prefix + "bc1")) {
               if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' ');
message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
m.send(`${argresult}\n ${m}\n By Server : ${message.guild.name}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
message.delete();
};    
});
client.on('message', message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
 
 
  if (command === `$help`) {
          let embed = new Discord.RichEmbed()
              .setColor('RANDOM')
              .addField('     **-=-=-=-={ help }-=-=-=-=- ** ')
              .addField(`**$bc1 | رسالة جماعية لجميع الاعضاء**'` )
              .addField(`**$bc2 | رسالة جماعية للاونلاين فقط**`)
              .addField(`**$sets | لعرض ستريمنق للبوت**`)
              .addField(`**$setg | لعرض بلاينق للبوت**` )
              .addField(`**$setava | لتغير صوره بوت**` )
              .setFooter(`Bater Host`)
              .setTimestamp()
         
              message.author.sendEmbed(embed)
  }
});

     

client.on("message", message => {
  if (message.content.startsWith(prefix + "bc2")) {
               if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' ');
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
message.delete();
};
});




client.login("NTk4Nzc0NTE2NjI1NDQwNzcw.XSbjCA.2B4QLgaQeWz9fzCsWxZqrWaojwo");
