import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const myInput = document.querySelector("#datetime-picker");
let startBtn = document.querySelector('button[data-start]');
let valDay = document.querySelector('span[data-days]');
let valHour = document.querySelector('span[data-hours]');
let valMinute = document.querySelector('span[data-minutes]');
let valSecond = document.querySelector('span[data-seconds]');

let timerId = null;
let userSelectedDate=new Date();
startBtn.disabled = true;

const optionNotific = {
  class: "notific",
  position : "topRight",
  title: "Error",
   titleColor: "white",
  message: "Please choose a date in the future",
    messageColor: "white",
  // messageSize: 302,
    backgroundColor : "red",
  close: true,
  timeout: 5000

};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        const currentDate = new Date();

        if (selectedDates[0] - currentDate > 0) {
            startBtn.disabled = false;
            userSelectedDate = selectedDates[0];
            
        } else {
            startBtn.disabled = true;
          //  window.alert("Please choose a date in the future");
           iziToast.show(optionNotific);
        }
    }
};


const fp = flatpickr(myInput, options);

startBtn.addEventListener('click', onTimerStart);

function onTimerStart() {
  
  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = userSelectedDate - startTime;
    startBtn.disabled = true;

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  valDay.textContent = addLeadingZero(days);
  valHour.textContent =addLeadingZero(hours);
  valMinute.textContent = addLeadingZero(minutes);
  valSecond.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}