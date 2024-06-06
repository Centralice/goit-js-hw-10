import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
      window.alert('Please choose a date in the future!');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

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

startBtn.addEventListener('click', handleStart);

function handleStart(event) {
  setInterval(() => {
    const userSelectedDateInMS = userSelectedDate.getTime();
    const currentDateInMS = new Date().getTime();
    const timeLeft = userSelectedDateInMS - currentDateInMS;
    const time = convertMs(timeLeft);
    document.querySelector('[data-days]').textContent = time.days;
    document.querySelector('[data-hours]').textContent = time.hours;
    document.querySelector('[data-minutes]').textContent = time.minutes;
    document.querySelector('[data-seconds]').textContent = time.seconds;
  }, 1000);
}




