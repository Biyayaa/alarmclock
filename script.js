let time = document.getElementById("time");
let date, hours, minutes, seconds, amPm;

function updateTime() {
  date = new Date();
  seconds = date.getSeconds();
  hours = date.getHours();
  minutes = date.getMinutes();

  amPm = hours >= 12 ? "PM" : "AM"; // check if it's AM or PM
  hours = hours % 12 || 12; // convert to 12-hour format

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let currentTime = hours + ":" + minutes + ":" + seconds + " " + amPm;
  time.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

// alarm




let hourss = document.getElementById("hourss");
let minutess = document.getElementById("minutess");
let secondss = document.getElementById("secondss");
let amPms = document.getElementById("amPms");
let alarmTimeout;
let audio = document.getElementById("audio");
let alarmInfo = document.getElementById("alarmInfo");

let snoozeAlarm = document.getElementById("snoozeAlarm");
let stopAlarm = document.getElementById("stopAlarm");

alarmInfo.style.display = "none";

activeAlarm.style.display = "none";


for(let index=1; index < 13; index++){
  // hourss.innerHTML += "<option>" + index +"</option>"
  if (index < 10) {
    hourss.innerHTML += "<option>"+"0"+index+"</option>";
  }
  else{
    hourss.innerHTML += "<option>" + index +"</option>"
  }
}

for(let index=0; index < 60; index++){
  // minutess.innerHTML += "<option>" + index +"</option>"
  if (index < 10) {
    minutess.innerHTML += "<option>"+"0"+index+"</option>";
  }
  else{
    minutess.innerHTML += "<option>" + index +"</option>"
  }
}


function alarmSet() {
  alarmInfo.innerHTML =
    "Alarm set for " +
    hourss.value +
    ":" +
    minutess.value +
    amPms.value;

  alarmInfo.style.display = "block";
}

let ring = document.getElementById("ring");

function checkAlarm() {
  if (
    hours == hourss.value &&
    minutes == minutess.value &&
    amPm == amPms.value
  ) {
    activeAlarm.style.display = "block";
    ring.innerHTML = "alarm is ringing";
    audio.play();
    // clearTimeout(alarmTimeout);
    alarmTimeout = setTimeout(function () {
      audio.pause();
      ring.innerHTML = "Alarm off";
      alarmInfo.style.display = "none";
      activeAlarm.style.display = "none";
    }, 30000);
  }
}
setInterval(checkAlarm, 1000);

function stop() {
  activeAlarm.style.display = "none";
  audio.pause();
  alarmInfo.style.display = "none";
}
