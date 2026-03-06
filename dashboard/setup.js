const params = new URLSearchParams(window.location.search);

const channel = params.get("channel");

const text = document.getElementById("channelText");

if(channel){

text.innerHTML = "Connected channel: <strong>" + channel + "</strong>";

}else{

text.innerHTML = "Channel connected.";

}