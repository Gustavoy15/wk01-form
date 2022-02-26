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

const usernameValue = username.value.trim();
const lastNameValue = lastName.value.trim();
const emailValue = email.value.trim();
const passwordValues = password.value.trim();
const passwordConfirmationValue = passwordConfirmation.value.trim();
const phoneValue = phone.value.trim();
const ageValue = age.value.trim();
const websiteValue = website.value.trim();
const experienceValue = experience.value.trim();

function validate() {
  if (username.value.length == 0) return alert("can't be blank");
  if (lastName.value.length == 0) return alert("can't be blank");
  if (email.value.length == 0) return alert("can't be blank");
  if (password.value.length == 0) return alert("can't be blank");
  if (passwordConfirmation.value.length == 0) return alert("can't be blank");
  if (phone.value.length == 0) return alert("can't be blank");
  if (age.value.length == 0) return alert("can't be blank");
  if (website.value.length == 0) return alert("can't be blank");
}
