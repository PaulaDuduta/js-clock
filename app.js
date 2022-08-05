const localTime = document.querySelector('.localTime');
const localDate = document.querySelector('.localDate');
const localDay = document.querySelector('.localDay');
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let alarmTime = null;
let alarmTimeOut = null;

//-->
function getTime() {
  const date = new Date();
  let hours = formatTime(date.getHours());
  let minutes = formatTime(date.getMinutes());
  let seconds = formatTime(date.getSeconds());
  // const milliseconds = date.getMilliseconds();

  //v1
  // if (hours < 10) {
  //   hours = '0' + hours;
  // }

  // if (minutes < 10) {
  //   minutes = '0' + minutes;
  // }

  // if (seconds < 10) {
  //   seconds = '0' + seconds;
  // }

  //v2
  function formatTime(time) {
    if (time < 10) {
      return '0' + time;
    }
    return time;
  }

  return `${hours} : ${minutes} : ${seconds}`;
}

setInterval(function () {
  localTime.innerText = getTime();
}, 1000);
//<--

//-->
function getDate() {
  const today = new Date();
  let days = today.getDate();
  let months = today.getMonth() + 1;

  if (days < 10) {
    days = '0' + days;
  }

  if (months < 10) {
    months = '0' + months;
  }

  let date = days + '-' + months + '-' + today.getFullYear();

  return date;
}

localDate.innerHTML = getDate();
//<--

//-->
function getDay() {
  const today = new Date();
  let day = days[today.getDay()];

  return day;
}

localDay.innerHTML = `${getDay()} :`;
//<--

//--> alarm
function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    console.log(timeToAlarm);
    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeOut = setTimeout(
        () => alert('Time to wake up, buddy!'),
        timeout,
      );
      alert('Alarm is set');

      alarmTime = null;
    }
  }
}
//<--

//--> clear alarm
function clearAlarm() {
  if (alarmTimeOut) {
    clearTimeout(alarmTimeOut);
    alert('Alarm cleared');
  }
}
//<--
