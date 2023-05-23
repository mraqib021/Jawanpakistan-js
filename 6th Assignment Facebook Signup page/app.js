var Firstname = document.getElementById("Firstname");
var Surname = document.getElementById("Surname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var dob = document.getElementById("date");
var register = () => {
  var radio = document.querySelector("input[type = radio]:checked");
  var x = radio.value;
  console.log(Firstname.value);
  console.log(Surname.value);
  console.log(email.value);
  console.log(password.value);
  console.log(dob.value);
  if (!radio) {
    alert("Please Select Any One Option");
  } else {
    console.log(x);
  }
  Firstname.value = "";
  Surname.value = "";
  email.value = "";
  password.value = "";
  dob.value = "";
  radio.checked = false;
};
