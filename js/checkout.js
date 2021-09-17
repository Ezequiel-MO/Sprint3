// Exercise 9
const form = document.getElementById("form");

const allInputs = document.getElementsByClassName("input");
const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const lastName = document.getElementById("last-name");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phone-number");

//Tots els camps són obligatoris.
//Tots els camps han de tenir almenys 3 caràcters.
//El nom i cognoms han de contenir només lletres.
//El telèfon ha de contenir només números.
//La contrasenya ha d'incloure números i lletres.
//L'email ha de tenir format d'email.

const displayMessage = (input, message) => {
  const smallPrint = input.parentElement.querySelector("p");
  smallPrint.classList.replace("hidden", "visible");
  smallPrint.style.color = "red";
  smallPrint.innerText = message;
};

const hideMessage = (input) => {
  const smallPrint = input.parentElement.querySelector("p");
  smallPrint.classList.replace("visible", "hidden");
};

const redBorder = (input) => {
  if (input.classList.contains("valid")) {
    input.classList.remove("valid");
  }
  input.classList.add("invalid");
};
const greenBorder = (input) => {
  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  }
  input.classList.add("valid");
};

const showError = (input, message) => {
  displayMessage(input, message);
  redBorder(input);
};
const showSuccess = (input) => {
  hideMessage(input);
  greenBorder(input);
};

const checkPasswordContainsOnlyNumbersAndLetters = () => {
  const re = /^[a-z0-9]+$/;
  const passwordContainsOnlyNumbersAndLetters = re.test(password.value);
  if (passwordContainsOnlyNumbersAndLetters) {
    showSuccess(password);
  } else {
    showError(password, "Password must contain both letters and numbers");
  }
};

const checkPhoneContainsOnlyNumbers = () => {
  const re = /^\d+$/;
  const phoneContainsOnlyNumbers = re.test(phoneNumber.value);
  if (phoneContainsOnlyNumbers) {
    showSuccess(phoneNumber);
  } else {
    showError(phoneNumber, "Phone number must only contain numbers");
  }
};

const checkFirstAndLastNameContainOnlyLetters = () => {
  const re = /^[a-zA-Z]+$/;
  const firstNameContainsOnlyLetters = re.test(firstName.value);
  const lastNameContainsOnlyLetters = re.test(lastName.value);
  if (firstNameContainsOnlyLetters) {
    showSuccess(firstName);
  } else {
    showError(firstName, "Your Name must contain only letters");
  }

  if (lastNameContainsOnlyLetters) {
    showSuccess(lastName);
  } else {
    showError(lastName, "Your Name must contain only letters");
  }
};

const checkInputLength = (input) => {
  const tooShort = input.value.length < 3;
  if (tooShort) {
    showError(input, `${input.placeholder} must be at least 3 characters`);
  } else showSuccess(input);
};

const checkAllFieldsAtLeast3characters = () => {
  for (let i = 0; i < allInputs.length; i++) {
    checkInputLength(allInputs[i]);
  }
};

const validateEmail = () => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = re.test(email.value);
  if (isValid) {
    showSuccess(email);
  } else {
    showError(email, "Format not valid");
  }
};

const checkAllFieldsAreNotEmpty = () => {
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value === "") {
      showError(allInputs[i], `${allInputs[i].placeholder} can not be empty`);
    } else showSuccess(allInputs[i]);
  }
};

function validate() {
  checkAllFieldsAreNotEmpty();
  validateEmail();
  checkAllFieldsAtLeast3characters();
  checkFirstAndLastNameContainOnlyLetters();
  checkPhoneContainsOnlyNumbers();
  checkPasswordContainsOnlyNumbersAndLetters();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
