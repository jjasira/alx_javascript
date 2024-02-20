document.addEventListener("DOMContentLoaded", function () {
  let dynamicForm = document.getElementById("dynamicForm");

  dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      dynamicForm.submit();
    } else {
      alert("Please fill in all fields.");
    }
  });

  let numFieldsDropdown = document.getElementById("numFields");

  numFieldsDropdown.addEventListener("change", function () {
    let selectedValue = parseInt(numFieldsDropdown.value);

    generateInputFields(selectedValue);
  });
});

function generateInputFields(numFields) {
  let inputContainer = document.getElementById("inputContainer");

  inputContainer.innerHTML = "";

  for (let i = 1; i <= numFields; i++) {
    let input = document.createElement("input");

    input.type = "text";
    input.name = "field" + i;

    inputContainer.appendChild(input);
  }
}

function validateForm() {
  let inputFields = document.querySelectorAll("#inputContainer input");

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === "") {
      return false;
    }
  }

  return true;
}
