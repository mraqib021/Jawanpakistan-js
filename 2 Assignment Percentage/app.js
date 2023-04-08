// Percentage Calculator

var num = +prompt("Enter Your Obtained Marks Out of 450");
var perentage = (num * 100) / 450;

if (perentage >= 91 && perentage <= 100) {
  document.write(
    "Your Percentage Is : " + Math.round(perentage) + "%" + `<br>` + "Your Grade 'A'"
  );
} else if (perentage >= 81 && perentage <= 90) {
  document.write(
    "Your Percentage Is : " + Math.round(perentage) + "%" + `<br>` + "Your Grade 'B'"
  );
} else if (perentage >= 71 && perentage <= 80) {
  document.write(
    "Your Percentage Is : " + Math.round(perentage) + "%" + `<br>` + "Your Grade 'C'"
  );
} else if (perentage >= 61 && perentage <= 70) {
  document.write(
    "Your Percentage Is : " + Math.round(perentage) + "%" + `<br>` + "Your Grade 'D'"
  );
} else if (perentage >= 0 && perentage <= 60) {
  document.write(
    "Your Percentage Is : " + Math.round(perentage) + "%" + `<br>` + "Your Grade 'Failed'"
  );
} else {
  document.write("Enter Valid Marks");
}

// Practice 

var arr = ["January", "Feburary", "March","April"];

// Remove Value last Index
var pop = arr.pop();

// Add Value Last Index
var push = arr.push("April")

// Remove Value first Index
var shift = arr.shift();

// Remove Value first Index
var unshift = arr.unshift("January");



console.table(arr);