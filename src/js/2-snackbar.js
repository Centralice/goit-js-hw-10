import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[name="delay"]');
const submit = document.querySelector('form');

input.addEventListener('input', handleInput);
submit.addEventListener('submit', handleSubmit);


let delay;

function handleInput(event) {
  delay = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();
  const fulfilled = document.querySelector('input[value="fulfilled"]:checked');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilled) {
        resolve(`Fulfilled promise in ${delay}ms`);                               
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }

      promise.then(value => {
        iziToast.success({
          message: value,
          messageColor: '#ffffff',
          backgroundColor: '#008000',
          position: 'bottomRight',
          timeout: 7000,
        });}
      )
      .catch(error => {
        iziToast.error({
          message: error,
          messageColor: '#ffffff',
          backgroundColor: '#d00000',
          position: 'topRight',
          timeout: 7000,
        });;
      });
    }, delay);
  });
}


