var pingAudio = document.getElementById('ping');
var title = document.getElementById('title');
var pingAmount = 0;
var startBtn = document.getElementById('startPings');
var pingInput = document.getElementById('inputPing');
var clear = document.getElementById('clearPings');

function pingHere() {
    pingAmount++;
    pingAudio.play();
    title.innerHTML = "(" + pingAmount + ") @here";
    var img = document.createElement('img');
    img.src = "https://cdn.discordapp.com/attachments/699663156011729023/746803028186890290/unknown.png";
    document.body.appendChild(img)
}

function pingThis() {
    if (pingInput.value == "@everyone" || pingInput.value == "@EVERYONE") {
        pingEveryone();
    } else if (pingInput.value == "@here" || pingInput.value == "@HERE") {
        pingHere();
    } else if (pingInput.value.trim() == ""){
        startBtn.innerHTML = "type in at least something...";
        setTimeout(btnNormal, 2000);
    } else {
        startBtn.innerHTML = "type in a valid ping m8";
        setTimeout(btnNormal, 2000);
    }
}

function btnNormal() {
    startBtn.innerHTML = "Enter";
}

function pingEveryone() {
    pingAmount++;
    pingAudio.play();
    title.innerHTML = "(" + pingAmount + ") @everyone";
    var img = document.createElement('img');
    img.src = "https://cdn.discordapp.com/attachments/699663156011729023/746623864447959100/unknown.png";
    document.body.appendChild(img);
}

function clearAllPings() {
    pingInput.value = "";
}

pingInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        startBtn.click();
    }
});

clear.onclick = clearAllPings;
startBtn.onclick = pingThis;