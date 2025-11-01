const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const elements = form.elements;
  const loginValue = elements['email'].value.trim();
  const passwordValue = elements['password'].value.trim();

  if (loginValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: loginValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
}
