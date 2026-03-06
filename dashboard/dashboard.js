const params = new URLSearchParams(window.location.search);

const channel = params.get("channel");

const text = document.getElementById("channelText");

if(channel){

text.innerHTML = "Managing channel: <strong>" + channel + "</strong>";

}else{

text.innerHTML = "Channel dashboard";

}

const API = "https://sharan-bot-kp71.onrender.com";

// TIMED MESSAGE

async function addTimedMessage(){

const message = document.getElementById("tm_message").value;
const interval = document.getElementById("tm_interval").value;

await fetch(API + "/timed_message/add",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
channel:channel,
message:message,
interval:interval
})

});

alert("Timed message added!");

}

// CUSTOM COMMAND

async function addCommand(){

const command = document.getElementById("cmd_name").value;
const response = document.getElementById("cmd_response").value;

await fetch(API + "/command/add",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
channel:channel,
command:command,
response:response
})

});

alert("Command saved!");

}

// ECONOMY

async function saveEconomy(){

const currency = document.getElementById("currency_name").value;
const daily = document.getElementById("daily_reward").value;

await fetch(API + "/economy/save",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
channel:channel,
currency_name:currency,
daily_reward:daily
})

});

alert("Economy saved!");

}

// STREAM MESSAGES

async function saveStreamMessages(){

const follow = document.getElementById("follow_msg").value;
const sub = document.getElementById("sub_msg").value;
const live = document.getElementById("live_msg").value;

await fetch(API + "/stream_messages/save",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
channel:channel,
follow_message:follow,
sub_message:sub,
live_message:live
})

});

alert("Messages saved!");

}