document.addEventListener("DOMContentLoaded", () => {
  let submitForm = document.getElementById("submitForm");

  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormSubmit();
  });
});

function handleFormSubmit() {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();

  if (validateForm(name, email)) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fill in all required fields.");
  }
}

function validateForm(name, email) {
  if (email === "" || name === "") {
    return false;
  }

  return true;
}
