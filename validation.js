const submitBtn = document.querySelector(".button");
const validateEmail = (email) => {
  return email.match(
    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:.[a-z0-9-]+)*$/
  );
};

submitBtn.addEventListener("click", () => {
  var emailVal = document.querySelector(".email").value;

  if (!validateEmail(emailVal)) {
    window.alert(
      "Please enter email as lower case eg. shuhad.loofer@gmail.com"
    );
  }
});
