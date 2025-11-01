const inputForm = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputForm.addEventListener('input', event => {
  const value = event.currentTarget.value.trim();
  output.textContent = value ? value : 'Anonymous';
});
