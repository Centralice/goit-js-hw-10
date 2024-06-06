import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const userSelectedDateInMS = userSelectedDate.getTime();
    const currentDateInMS = new Date().getTime();

    if (currentDateInMS > userSelectedDateInMS) {
      iziToast.show({
        title: 'Ay Caramba!',
        titleColor: '#ffd60a',
        message: 'Please choose a date in the future',
        messageColor: '#ffd60a',
        backgroundColor: '#0077b6',
        position: 'topRight',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);
const input = document.querySelector('#datetime-picker');

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

let userSelectedDate;

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

startBtn.addEventListener('click', handleStart);

function handleStart(event) {
startBtn.disabled = true;
const intervalID = setInterval(() => {
  const userSelectedDateInMS = userSelectedDate.getTime();
  const currentDateInMS = new Date().getTime();
  const timeLeft = userSelectedDateInMS - currentDateInMS;
  const time = convertMs(timeLeft);
  if (timeLeft > 0) {
    document.querySelector('[data-days]').textContent = String(
      time.days
    ).padStart(2, '0');
    document.querySelector('[data-hours]').textContent = String(
      time.hours
    ).padStart(2, '0');
    document.querySelector('[data-minutes]').textContent = String(
      time.minutes
    ).padStart(2, '0');
    document.querySelector('[data-seconds]').textContent = String(
      time.seconds
    ).padStart(2, '0');
  } else {
    clearInterval(intervalID);
    input.value = "";
  }
}, 1000);
}
    





