// // Chapter # 21 Changing Case

// // Qno 1

var userInput = "Hello"
var allLower = userInput.toLowerCase();
console.log(allLower)

// // Qno 2

var x = "Hello World";
x = x.toLowerCase();

// // Qno 3

var x = "Hello World";
x = x.toUpperCase();

// // Qno 4

var x = "Hello World";
var y = x.toLowerCase();
console.log(y);

// // Qno 5

var x = ["Hello World"];
var y = x[0].toLowerCase();
console.log(y);

// // Qno 6

// var x = "Hello Developers !";
// alert(x.toUpperCase());

// // Qno 7

var cityNames = "kaRaChI";
var firstLetter = cityNames.slice(0, 1).toUpperCase();
var Letters = cityNames.slice(1).toLowerCase();
console.log(firstLetter + Letters);

// // Chapter 22 - 25 Strings

// // Q No 1

var sameWord = "captain";
sameWord = sameWord.slice(1, 3);
console.log(sameWord);

// // Q No 2

var x = "Hello World";
x = x.length;
console.log(x);

// // Q No 3

var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg)

// // Q No 4

var x = "Hello World";
var y = x.length;
console.log(y)

// // Q No 5

var x = "Hello Javascript";
var y = x.slice(1, 13);
console.log(y);

// // Q No 6

var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);

// Q No 7

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);

// // Q No 8

var x = "Ready Steady Go";
var y = x.lastIndexOf("Go");
console.log(y);


// // Q No 9

var x = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,";

if (x.indexOf("Lorem") >= 1) {
    var a = x.indexOf("Lorem")
    console.log(a);
}
// // Q No 10

var x = "Helloo Js";
var y = x.charAt(2);
console.log(y);

// // Q No 11

var character = "Mern Developers !";
var chr = character.charAt(10);
console.log(chr)

// // Q No 12

var msg = "Hello Js";
var x = msg.slice(msg.length - 1);
console.log(x);

// // Q No 13

var Name = prompt("Enter Name", "Hammad");
var cha = Name.charAt(5);
console.log(cha);

// // Q No 14
//** Pending **

// // Q No 15
var x = "Characters";
for (var i = 0; i <= x.length; i++) {
    var y = x.charAt(i);
    console.log(y)
    var a = [x]
    console.log(a)
}

// // Q No 16
var reply = "no";
var revisedreply = reply.replace("no", "Yes");
console.log(reply, revisedreply)

// // Q No 17
var str = "1";
var newStr = str.replace("1", "One");
console.log(newStr)

// // Q No 18
var a = "Hello";
var b = a.replace("o", "a");
console.log(b)

