import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");

const delayEl = document.querySelector("input[name=delay]");

formEl.addEventListener('submit', onClickSubmit);

function onClickSubmit(event) {
    event.preventDefault();
   
    const delay = event.target.elements.delay.value;
    
    const resChecked = event.currentTarget.elements[2].checked;

    if (delay < 0) {
        iziToast.show({
            message: `Please enter a positive number`,
            backgroundColor: 'yellow',
            color: 'white',
            position: 'topRight',
            close: true,
  timeout: 5000
        });
formEl.reset();
        return
    }
    
    createPromise(resChecked,delay).then(onSuccess).catch(onError);
    formEl.reset();
}
   
function onError({  delay }) {
  iziToast.show({
       message: `❌ Rejected promise in ${delay} ms`,
          backgroundColor: 'red',
          color: 'white',
    position:'topRight'});
}

function onSuccess({  delay }) {
    iziToast.show({message: `✅ Fulfilled promise in ${delay} ms`,
        backgroundColor: "green",
        color: 'white',
    position:'topRight'
});
}

function createPromise(check, delay) {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      if (check) {
        resolve({ delay });
      } else {
        reject({ delay });
      }
    }, delay);
  });
}