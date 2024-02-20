document.addEventListener("DOMContentLoaded", () => {
  let emailForm = document.getElementById("emailForm");

  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let emailInput = document.getElementById("email");
    let email = emailInput.value;

    if (validateEmail(email)) {
      emailForm.submit();
    } else {
      document.getElementById("error").innerHTML =
        "Please enter a valid email address.";
    }
  });
});

function validateEmail(email) {
  let validateRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return validateRegex.test(email);
}
