let time = document.getElementById("time");
let date,hours,minutes,seconds;

function updateTime() {
  date = new Date();
   seconds = date.getSeconds();
   hours = date.getHours();
   minutes = date.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let currentTime = hours + ":" + minutes + ":" + seconds;
  time.innerHTML = currentTime;
}
setInterval(updateTime, 1000);



// alarm
let hourss = document.getElementById('hourss');
let minutess = document.getElementById('minutess');
let secondss = document.getElementById('secondss');
let alarmTimeout;
let audio = document.getElementById("audio");

function alarmSet() {
  let ring=document.getElementById('ring')
  if (hours == hourss.value && minutes == minutess.value && seconds == secondss.value) {
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
