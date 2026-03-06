document.addEventListener("DOMContentLoaded", function(){

const params = new URLSearchParams(window.location.search);

const channel = params.get("channel");

const text = document.getElementById("channelText");

if(channel){

text.innerHTML =
"✅ Connected Twitch channel: <strong>" + channel + "</strong>";

}else{

text.innerHTML = "Channel connected.";

}

const btn = document.getElementById("openDashboard");

if(btn){

btn.addEventListener("click", function(){

if(channel){

window.location.href =
"dashboard.html?channel=" + channel;

}else{

window.location.href = "dashboard.html";

}

});

}

});