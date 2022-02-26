const form = document.getElementById("form");
const username = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const website = document.getElementById("website");
const experience = document.getElementById("experience");

let errorName = document.getElementById("errorName");
let errorLastName = document.getElementById("errorLastName");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let errorPasswordConfirmation = document.getElementById(
  "errorPasswordConfirmation"
);
let errorPhone = document.getElementById("errorPhone");
let errorAge = document.getElementById("errorAge");
let errorWebsite = document.getElementById("errorWebsite");

const usernameValue = username.value.trim();
const lastNameValue = lastName.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const passwordConfirmationValue = passwordConfirmation.value.trim();
const phoneValue = phone.value.trim();
const ageValue = age.value.trim();
const websiteValue = website.value.trim();
const experienceValue = experience.value.trim();

function validate() {
  if (username.value.length == 0) return alert("Name can't be blank");
  if (lastName.value.length == 0) return alert("Last Name can't be blank");
  if (email.value.length == 0) return alert("Email can't be blank");
  if (password.value.length == 0) return alert("Password can't be blank");
  if (passwordConfirmation.value.length == 0)
    return alert("You need to do a password confirmation");
  if (phone.value.length == 0) return alert("Phone can't be blank");
  if (age.value.length == 0) return alert("Age can't be blank");
  if (website.value.length == 0) return alert("Website can't be blank");
  if (passwordValue === passwordConfirmationValue) {
    return "";
  } else return alert("Passwords don't match");
}
