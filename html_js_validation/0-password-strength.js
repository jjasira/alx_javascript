document.addEventListener("DOMContentLoaded", () => {
  let passwordForm = document.getElementById("passwordForm");

  passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let passInput = document.getElementById("password");
    let password = passInput.value;

    if (validatePassword(password)) {
      passwordForm.submit();
    } else {
      let errorParagraph = document.getElementById("error");
      errorParagraph.innerHTML = "Password does not meet the criteria.";
    }
  });
});

function validatePassword(password) {
  let lengthRegex = /.{8,}/;
  let uppercaseRegex = /[A-Z]/;
  let lowercaseRegex = /[a-z]/;
  let digitRegex = /\d/;
  let specialCharRegex = /[!@#$%^&*]/;

  let isLengthValid = lengthRegex.test(password);
  let isUppercaseValid = uppercaseRegex.test(password);
  let isLowercaseValid = lowercaseRegex.test(password);
  let isDigitValid = digitRegex.test(password);
  let isSpecialCharValid = specialCharRegex.test(password);

  return (
    isLengthValid &&
    isUppercaseValid &&
    isLowercaseValid &&
    isDigitValid &&
    isSpecialCharValid
  );
}
