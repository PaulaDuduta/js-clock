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

//-->
function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // const milliseconds = date.getMilliseconds();

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${hours} : ${minutes} : ${seconds}`;
}

setInterval(function () {
  localTime.innerHTML = getTime();
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
