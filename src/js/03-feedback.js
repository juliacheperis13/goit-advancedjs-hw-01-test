import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const THROTTLE_TIME = 500;
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

email.value = formData.email ?? '';
message.value = formData.message ?? '';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputChange, THROTTLE_TIME));

function onInputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
