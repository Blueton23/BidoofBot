const DISCORD = require('discord.js');
let bot = new DISCORD.Client();
let channel = new DISCORD.Channel();
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var isLive = false;

let pararm = require('./param.js');

let channel_stream = pararm.channel_stream;
console.log("channel : " + channel_stream);

let client_id = pararm.client_id;
console.log("client id : " + client_id);

let bot_id = pararm.bot_id;
console.log("bot id : " + bot_id);


// bot commands
bot.on('ready', function () {
    console.log("Je suis co !!!");
});

bot.on('message', message => {
    if (message.content == 'ping') {
        message.reply('pong');
    }
});

bot.on('guildMemberAdd', GuildMember => {
    GuildMember.addRole('681762016427638794', 'new user');
});

bot.on('message', message => {
    if (message.content == 'stream') {
        getStreamData();
    }
});

setInterval(() => {
    if (isLive == false) {
        getStreamData();
    }
}, 30000);

function getData(data) {
    if (data != undefined) {
        bot.channels.get(channel_stream).send('@everyone Blueton est en stream !!!! https://twitch.tv/blueton23');
        isLive = true;
    }
    else{
        isLive = false;
    }
    console.log(data);
}

function getStreamData() {
    const URL = "https://api.twitch.tv/helix/streams?user_login=blueton23";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let stream = JSON.parse(this.responseText);
                let sData = stream.data[0];
                getData(sData);
            } else {
                console.error(this.status);
                console.log(this.status);
            }
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.setRequestHeader('Client-ID', client_id);
    xhttp.send();
}

// https://api.twitch.tv/helix/streams?user_login=blueton23

bot.login(bot_id);