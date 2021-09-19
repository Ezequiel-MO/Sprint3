// Exercise 9
const form = document.getElementById("form");

const allInputs = document.getElementsByClassName("input");
const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const lastName = document.getElementById("last-name");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phone-number");

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

const containsOtherThanNumbers = (input) => {
  const re = /^[0-9]+$/;
  const wrongPhoneFormat = !re.test(input.value);
  if (wrongPhoneFormat) {
    return true;
  } else return false;
};

const containsOtherThanNumbersAndLetters = (input) => {
  const re = /^[a-z0-9]+$/;
  const wrongPassword = !re.test(input.value);
  if (wrongPassword) {
    return true;
  } else return false;
};

const emailWrongFormat = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nonValid = !re.test(email.value);
  if (nonValid) {
    return true;
  } else return false;
};

const containsOtherThanLetters = (input) => {
  const re = /^[a-zA-Z]+$/;
  const OnlyLetters = re.test(input.value);
  if (!OnlyLetters) {
    return true;
  } else return false;
};

const tooShort = (input) => {
  const tooShort = input.value.length < 3;
  if (tooShort) {
    return true;
  } else return false;
};

const emptyField = (input) => {
  if (input.value === "") {
    return true;
  } else return false;
};

const phoneNumberValid = () => {
  if (emptyField(phoneNumber)) {
    showError(phoneNumber, "Phone Number is required");
  } else if (tooShort(phoneNumber)) {
    showError(phoneNumber, "Phone number need to be at least 3 numbers");
  } else if (containsOtherThanNumbers(phoneNumber)) {
    showError(phoneNumber, "Must contain only numbers");
  } else showSuccess(phoneNumber);
};

const passwordValid = () => {
  if (emptyField(password)) {
    showError(password, "Password is required");
  } else if (tooShort(password)) {
    showError(password, "Password need to be at least 3 characters");
  } else if (containsOtherThanNumbersAndLetters(password)) {
    showError(password, "Password can only contain numbers and letters");
  } else showSuccess(password);
};

const emailValid = () => {
  if (emptyField(email)) {
    showError(email, "Email is required");
  } else if (tooShort(email)) {
    showError(email, "Must contain at least 3 characters");
  } else if (emailWrongFormat(email)) {
    showError(email, "Email is in wrong format");
  } else showSuccess(email);
};

const addressValid = () => {
  if (emptyField(address)) {
    showError(address, "Address is required");
  } else if (tooShort(address)) {
    showError(address, "Must contain at least 3 characters");
  } else showSuccess(address);
};

const lastNameValid = () => {
  if (emptyField(lastName)) {
    showError(lastName, "Last Name is required");
  } else if (tooShort(lastName)) {
    showError(lastName, "Must contain at least 3 letters");
  } else if (containsOtherThanLetters(firstName)) {
    showError(lastName, "Can only be letters");
  } else showSuccess(lastName);
};

const firstNameValid = () => {
  if (emptyField(firstName)) {
    showError(firstName, "First Name is required");
  } else if (tooShort(firstName)) {
    showError(firstName, "Must contain at least 3 letters");
  } else if (containsOtherThanLetters(firstName)) {
    showError(firstName, "Can only be letters");
  } else showSuccess(firstName);
};

function validate() {
  firstNameValid();
  lastNameValid();
  emailValid();
  passwordValid();
  addressValid();
  phoneNumberValid();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
