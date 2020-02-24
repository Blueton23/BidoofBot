const DISCORD = require('discord.js');
const channelName = "Blueton23";
let bot = new DISCORD.Client();

bot.on('ready', function(){
    console.log("Je suis co !!!");
});

bot.on('message', message =>{
    if (message.content == 'ping'){
        message.reply('pong');
    }
});

bot.on('message', message =>{
    if (message.content == 'stream'){
        CheckOnline();
    }
});

function marchepo(){
    JQUERY.ajax({
        url: "https://api.twitch.tv/kraken/streams/" + channelName,
        dataType: 'json',
        headers:{
            'Client-ID': '9nlq7sldobuoz5mj4fhd7s6adizknl'
        },
        success: function(channel){
            if (channel["stream"] == null){
                console.log(channelName + " n'est pas en ligne");
            } else {
                console.log(channelName + " est en ligne");
            }
        }
    });
}

async function CheckOnline() {


}

bot.login('NjgxMjAxOTY1MDkwNjAzMDQz.XlLCbw.8BSRuAXvfJFnqxRovRfxkNz9AoU');