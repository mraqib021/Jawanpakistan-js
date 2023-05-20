// // Chapter 1 Alerts

// // Q No 1

alert("First Name : Aqib");
alert("Last Name : Iqbal");
alert("Email : mraqib021@gmail.com");
alert("Mobile Number : 03022114262");
alert("Password : *******");

// // Q No 2

alert("I am Learning Javascript !");

// // Q No 3

alert("Heloo World !");

// // Chapter 2 Variable For String

// // Q No 1

var firstName;

// // Q No 2

var Name;

Name = "Aqib";

// // Q No 3

var teamName = "3 Idiots";

alert("Team Name : " + teamName);

// // Q No 4

var bestMan = "Charlie";

bestMan = "Aqib";

//  // Chapter 3 Variables for Numbers

// // Q No 1

var caseQty ;

// // Q No 2

caseQty = 144;

// // Q No 3

var num = 9;

// // Q No 4

var sum ;

sum = 2 + 5;

// // Q No 5

var price = 100;
var shippingCharge = 10;
var orderTotal = price + shippingCharge;
alert("Total Amount : " + orderTotal);

// // Q No 6

var num1 = 12;
num1 = num1 + 5;
alert(num1);

// // Chapter No 4 Variable Name Legal & Illegal

// // Q No 1

var productCost= 3.45;

// // Q No 2

var nameOfBrand;

// // Q No 3

var anyNumber = 16;

// // Q No 4

var firstName ;
var lastName ;

// // Q No 5

// // Legal

var legal ;
var camelCase ;
var NAME ;
var $dads ;
var num123 ;

// // Illegal

// var %2321 ;
// var 1num ;
// var #!21 ;
// var !name ;
// var ?name ;;

// // Chapter 5 (Math Expression I)

// // Q No 1

var name = "Modulus"

// // // Q No 2

console.log("2");

// // Q No 3

var largeNum = 2000000;
alert(largeNum)

// // Q No 4

var num1 = 25 - 12;
var num2 = num1;
alert(num2)

// // Q No 5

// Pending

// // Q No 6

alert(2 * 6);

// // Chapter 6 (Math Expression II)

// // Q No 1

var x = 23 - 1;
var y = 12 * 2;
console.log(x);
console.log(y);

// // Q No 2

var x = 100 ;
x = x--;

// Q No 3

console.log("Y : " + 51)

// Q No 4

console.log("Z : " + 49);

// // Q No 5

var num = 200;
var newNum = num;
num = num--;

// // Q No 6

var num = 1;
var newNum = num;

// // Q No 7

var x = 20;
x = x++;
alert(x);

// Chapter 7 Math Expression III

// Q No 1

console.log("The Value of Calculated Num :" + " 14");

// // Q No 2

console.log("The Value of Calculated Num :" + " 24");

// // Q No 3

console.log("The Value of Calculated Num :" + " 24");

// // Q No 4

console.log("The Value of Calculated Num :" + " 18");

// // Q No 5

var cost = (2 + 2) * (4 + 10);

console.log(cost);

// // Q No 6

var units = 2 + 2 * 4 + 10;

console.log(units);

// // Q No 7

var pressure = 4 / (2 * 4);

console.log(pressure);

// // Chapter No 8 Concatenating Text Strings

// // Q No 1

console.log("22");

// // Q No 2

alert("Hello,Dolly");

// // Q No 3

alert("333");

// // Q No 4

var a = "Pakistan";
var b = "Zindabad";
alert(a + b);

// // Q No 5

var Concatenation = "35" + 2;

// // Q No 6

var firstName = "Aqib";
var lastName = "Iqbal";
var fullName = firstName + lastName;
console.log(fullName);

// Chapter No 9 Prompts

 // Q No 1

var response = prompt("Enter Your First Name");
var firstName = response;
console.log("first Name : " + firstName);

// // Q No 2

var response = prompt("Enter Your Country Name", "China");
var country = response;
console.log("Country : " + country);

// // Q No 3

var yourName = prompt("Enter Your Name");

// // Q No 4

var msg = prompt("Enter Your Message", "Hello");

// // Q No 5

var one = prompt("Message ?", "Hello");
var two = one;

// // Q No 6

var response = prompt(
  "Enter Your Favourite Programming Language",
  "JavaScript"
);
alert(response);

// // Chapter 10 If Statement

// // Q No 1

var city = "karachi";
if (city == "karachi") {
  console.log("The City Of Lights");
}

// // Q No 2

var x = 0;
var y = 0;
if(x === y){
   var z = prompt("What's the Value of 'Z'")
   var a = z;
}

// // Q No 3

var zipCode = 10010;
if(zipCode == "10011"){
    alert("Karachi")
}else(
    alert("Please Write Correct City ! ")
)

// Q No 4

var x = 1;
if (x < 2) {
  x = 3;
  console.log(x);
}

// Chapter  Comparison Operators

// // Q No 1

var x = 0;
var y = 1;
if(x != y){
    alert("X Not Equal Y")
};

// // Q No 2

if(y >= x){
    console.log("X is Equal to : " + x);
}

// // Q No 3

if(x != 12){
    x = 12
    console.log(x)
}

// // Q No 4

if(20 != 15){
    alert("Congrulations")
}

// // Q No 5

var name = prompt("Enter Your First Name");
if(name != "aqib"){
    alert("No Match")
};

// // Chapter 12 If... Else and Else if Statement
// Q No 1
var a = 10;
var b = 70;
if (a >= b) {
  alert("A is Greater than B");
} else {
  alert("B is Greater than A");
}

// Q No 2
var English = +prompt("Enter English Marks", 65);
var urdu = +prompt("Enter Urdu Marks", 42);
var Math = +prompt("Enter Math Marks", 70);
var total = ((English + urdu + Math) / 300) * 100;
if (total > 100) {
  alert("Enter Valid Marks !");
} else if (total >= 80 && total <= 100) {
  alert("A Grade : " + total);
} else if (total >= 70 && total <= 80) {
  alert("B Grade : " + total);
} else if (total >= 60 && total <= 70) {
  alert("C Grade : " + total);
} else {
  alert("Failed !");
}

// Q No 3
var a = 9;
if (a != 10) {
  alert("a is : " + a);
}

// Q No 4

var city = prompt("Enter Your City");
if(city == "karachi"){
    alert("It's Karachi")
}else if(city == "lahore"){
    alert("It's Lahore")
}else{
    alert("Enter Valid City")
};

// Chapter 13 Testing Sets of Conditions

// Q No 1

var a = 2;
var b = 2;
var c = 4;
var d = 4;
if(a === b){
    alert("True")
}else if(c === d){
    alert("True")
}else{
    alert("False")
}

// Q No 2

var a = 2;
var b = 2;
var c = 4;
var d = 5;
if(a === b){
    alert("True")
}else if(c === d){
    alert("False")
}

// Q No 3

var Name = "Hamza";
var Name2 = "Arsalan";
var Age = 60;
var user_Name = prompt("Enter Name", "Hamza");
var user_Age = +prompt("Enter Age", 52);
if (user_Name == Name || user_Name == Name2) {
  if (user_Age < 60) {
    alert("Wellcome");
  } else {
    alert("Not Allowed !");
  }
} else {
  alert("Not Allowed !");
}

// Q No 4

var a = 1;
var b = 2;
if (a < b) {
  alert("a is less than b");
} else if (a > b) {
  alert("a is greater than b");
}

// Q No 5

var first_Name = "Aqib";
var last_Name = "Iqbal";
var user_FName = prompt("Enter First Name");
var user_LName = prompt("Enter Last Name");

if (first_Name == user_FName || user_LName == last_Name) {
  alert("Wellcome Buddy !");
} else {
  alert("You Are Not Allowed");
}

// Chapter No 14 If Statement Nested

// Q No 1
var pass = prompt("Enter Password", "Hello");

if (pass.length <= 4) {
  alert("Password must be greater than 5");
} else if (pass.length > 4) {
  alert("Ok");
}

// Q No 2

var a = 12;
var b = "Max";
if(a === 12){
    if(b === "Max"){
        alert("Ok")
    }
}

// Q No 3

var a = 12;
var b = "Max";
if (a === 12 && b === "Max") {
  alert("Ok");
}

// Q No 4

var a = 7;
var b = 7;
if(a == b ){
    if(a <= b){
        alert("ok")
    }
}

// Chapter 15 Array I
// Q No 1

var arr = [];

// Q NO 2

var array = ["Hello"];

// Q No 3

var alphabet = ["h", "i", "J", "k", "l"];
alert(alphabet[2]);

// Q No 4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
console.log(alphabet.length);

// Q No 5
var arr = ["i"];
arr[1] = "j";
console.log(arr);

// Chapter 16 Array II
// Q No 1

var arr_ay = ["Hello"];
var arr = arr_ay.push("World");
alert(arr_ay[1]);

// Q No 2
var Alphabet = ["h", "i", "j", "k", "l", "m"];
var Alphabe = Alphabet.pop();
console.log(Alphabet);

// Q No 3
var Alphabet = ["h", "i", "j", "k", "l", "m"];
var Alphabe = Alphabet.push(1);
console.log(Alphabet);

// Chapter 16 Array III

// Q No 1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var size = sizes.shift();
console.log(sizes)

// Q No 2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var new_Size = sizes.unshift(1,2,3);
console.log(sizes)

// Q No 3
var arr = ["World"];
var arrr = arr.unshift("Hello");
console.log(arr[0]);

// Q No 4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var size = sizes.splice(2,0,"L");
console.log(sizes);

// Q No 5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0,3);
console.log(regSizes)

// Q No 6
var pets = ["dog", "cat", "ox", "duck", "frog"];
var pet = pets.splice(1,3,"Monkey","Cow");
console.log(pets)

// Q No 7
var pets = ["dog", "cat", "ox", "duck", "frog"];
var pet = pets.splice(1,2);
console.log(pets);

// Q No 8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets = pets.slice(3,5);
console.log(pets)

// Chapter No 17-20 For Loops

// Q No 1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Q No 2
for (let i = 0; i <= 12; i++) {
  console.log(i);
}

// Q No 3
for (var i = 0; i <= 4; i++) {}

// Q No 4
for (let i = 1 ; i < 101 ; i++){
  console.log(i)
}

// Q No 5
for (let i = 3; i > 0; i--) {
  console.log(i);
}
// Q No 6
var arr = [1, 2, 3];

// Q No 7
var flag = true;

// Q No 8
var pets = ["dog", "cat", "ox", "duck", "frog"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// Q No 9
for (let i = 0; i < 10; i++) {
  if(i === 1){
    alert(i);
    break;
  }
}

// Q No 10
var user_Name = prompt("Enter First Name", "hammad").toLowerCase();
var names = ["aqib", "hammad", "mubbashir"];
var flag = false;
for (var i = 0; i < names.length; i++) {
  if (names[i] === user_Name) {
    alert("Enter");
    flag = true;
  }
}

if (!flag) {
  alert("Please Write Correct User Name");
}

// Q No 11
var matchFound = false;
var userName = prompt("Enter First Name", "hammad").toLowerCase();
var names = ["aqib", "hammad", "mubbashir"];
for (var i = 0; i < names.length; i++) {
  if (userName ===names[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if(!matchFound){
  alert("Enter Valid UserName !")
}

// Q No 12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < firstArr.length; j++) {
    console.log(firstArr[i] + secondArr[j])
  }
}
