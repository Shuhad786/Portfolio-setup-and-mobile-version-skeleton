const submitBtn = document.querySelector('.contact-button');
const validateEmail = (email) => {
  return email.match(
    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:.[a-z0-9-]+)*$/
  );
};

submitBtn.addEventListener('click', () => {
  const emailVal = document.querySelector('.email').value;

  if (!validateEmail(emailVal)) {
    window.alert(
      'Please enter email as lower case eg. shuhad.loofer@gmail.com'
    );
  }
});
