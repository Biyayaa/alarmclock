let time = document.getElementById("time");
let date,hours,minutes,seconds,amPm;

function updateTime() {
  date = new Date();
   seconds = date.getSeconds();
   hours = date.getHours();
   minutes = date.getMinutes();


   amPm = hours >= 12 ? 'PM' : 'AM'; // check if it's AM or PM
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
let hourss = document.getElementById('hourss');
let minutess = document.getElementById('minutess');
let secondss = document.getElementById('secondss');
let amPms = document.getElementById('amPms')
let alarmTimeout;
let audio = document.getElementById("audio");

function alarmSet() {
  let ring=document.getElementById('ring')
  if (hours == hourss.value && minutes == minutess.value && seconds == secondss.value && amPm == amPms.value) {
    ring.innerHTML = "alarm is ringing";
    audio.play();
    // clearTimeout(alarmTimeout);
    alarmTimeout = setTimeout(function() {
      audio.pause()
      ring.innerHTML = "alarm off";
    }, 30000);
  }
}
setInterval(alarmSet, 1000);
