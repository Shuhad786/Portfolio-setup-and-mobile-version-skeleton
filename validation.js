const submitBtn = document.querySelector('.contact-button');
const validateEmail = (email) => email === email.toLowerCase();

submitBtn.addEventListener('click', () => {
  const emailVal = document.querySelector('.email').value;

  if (!validateEmail(emailVal)) {
    window.prompt(
      'Please enter email as lower case eg. shuhad.loofer@gmail.com',
    );
  }
});
