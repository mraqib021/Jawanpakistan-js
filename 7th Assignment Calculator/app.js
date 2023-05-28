var display = document.getElementById("display");

var GetValue = (val) => {
  display.value += val;
};

var Calulate = () => {
  console.log(display.value);
  var a = display.value;
  display.value = eval(a);
};
var remove = () => {
  display.value = "";
};
var check = document.getElementById("check");
check.onchange = (e) => {
  if (check.checked == true) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("mode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("ligth");
    window.localStorage.setItem("mode", "ligth");
  }
};

var mode = window.localStorage.getItem("mode");
if (mode == "dark") {
  check.checked == true;
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
}
if (mode == "ligth") {
  check.checked == false;
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("ligth");
}
