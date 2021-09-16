// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var firstName = document.querySelector(".first-name");
var lastName = document.querySelector(".last-name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 9

let allInputs = document.querySelectorAll(".input");
var errorEmail = document.getElementById("errorEmail");
var errorAddress = document.getElementById("errorAddress");
var errorLastName = document.getElementById("errorLastName");
var errorsGeneral = document.querySelectorAll(".error");

function validate() {
  // Validate fields entered by the user: name, phone, password, and email

  console.log("submitted")
  /* for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value.trim().length < 3) {
      allInputs[i].classList.add("border-danger");
      errorsGeneral[i].innerHTML =
        "All fields need to have at least 3 characters";
      errorsGeneral[i].style.display = "block";
    }

    if (allInputs[i].value === "" || allInputs[i].value === null) {
      allInputs[i].classList.add("border-danger");
      errorsGeneral[i].innerHTML = "All fields are mandatory";
      errorsGeneral[i].style.display = "block";
    }
  } */
}