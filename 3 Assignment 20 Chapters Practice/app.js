// // // Chapter # 1
// //  ************Alert****************

// alert("Hello World !");
// alert("Error ! Please Enter a Valid Password");
// alert("Wellcome JS Land \n Happy Coding");
// alert("Wellcome JS Land...");
// alert("Happy Coding \nPrevent this page from creating additional dialogs");
// console.log('alert box end');


// // // Chapter # 2
// //  ************Variable For String****************


// var userName;
// var myName = "Aqib";
// var message = "Hello World";
// alert(message);
// var studentName = "Mubbashir";
// var studentAge = "15 Years Old";
// var studentData = "Cetified Web Application Developer";

// alert(studentName);
// alert(studentAge);
// alert(studentData);

// var pizza = "Pizza \nPizz \nPiz \nPi \nP";
// alert(pizza);

// var email = "mraqib021@gmail.com";
// alert("My email is : " + email);

// var book = "A Smarter Way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// var data = "Yah! I can write HTML Content through JavaScript";
// document.write(data);

// var symbol = "ஜ۩۞۩ஜ▬"
// alert("-------------" + symbol + "------------")

// // // Chapter # 3
// //  ************Variable For Number****************


// var age = 20;
// alert("I am " + age + " Years Old");

// var visitor = 15;
// alert("You have visited this site"+ visitor + " times");

// var birthYear = 2003;
// document.write("My birth year is :" + birthYear + `<br>` + 
// "Data type of my declared variable is" + typeof(birthYear) + `<br>`
// )

// var visitorName = "john Dae";
// var product =  "5 T-shirts";
// var store = "XYZ Clothing Store";

// document.write(visitorName + " Ordered "+ product + " On "+ store);

// // // Chapter # 4
// //  ************Variables Name Legal & Illegal****************


var $Name = "Legal";
var camelCase = "Legal";
var camel_Case = "Legal";
// var &5fsaf = "Illegal";
// var  )@#$% = "Illegal";
var camelCase21 = "Legal"




// // CHAPTER NO 5 
// // ******************* MATH EXPRESSIONS ***************************


var Firt = 9;
var sec = 7;
document.write("Sum of 9 and 7 is  : " + (Firt + sec) + "<br>")
document.write("subtraction of 9 and 7 is  : " + (Firt - sec) + "<br>")
document.write("multiplication of 9 and 7 is  : " + (Firt * sec) + "<br>")
document.write("division of 9 and 7 is  : " + (Firt / sec) + "<br>")
document.write("modulus of 9 and 7 is  : " + (Firt % sec) + "<br><br>")

var Value;

document.write("value after variable declaration is : " + Value + "<br>")
document.write("initial value is : " + (Value = 5) + "<br>")
document.write("value after increment is  : " + ++Value + "<br>")
document.write("value after decrement is  : " + --Value + "<br>")
document.write("value after adding 9 is  : " + (Value + 9) + "<br>")
document.write("value after dividing 5 is  : " + (Value / 5) + "<br>")
document.write("value The remainder is  : " + (Value = 0) + "<br><br>")

var costofticket = 600;
document.write("Total cost of 5 Movie ticket is : " + costofticket * 5 + " PKR <br><br>")

var Table = 4;
document.write("<b>Table of 4</b> <br>")
document.write(Table + " :  1  X  = " + Table * 1 + "<br>")
document.write(Table + " :  2  X  = " + Table * 2 + "<br>")
document.write(Table + " :  3  X  = " + Table * 3 + "<br>")
document.write(Table + " :  4  X  = " + Table * 4 + "<br>")
document.write(Table + " :  5  X  = " + Table * 5 + "<br>")
document.write(Table + " :  6  X  = " + Table * 6 + "<br>")
document.write(Table + " :  7  X  = " + Table * 7 + "<br>")
document.write(Table + " :  8  X  = " + Table * 8 + "<br>")
document.write(Table + " :  9  X  = " + Table * 9 + "<br>")
document.write(Table + " : 10  X  = " + Table * 10 + "<br><br>")

var Fahrenheit = +prompt("enter Fahrenheit for convert into Celsius", "89.6");
var Celsius = (Fahrenheit - 32) * 5 / 9;
document.write("Fahrenheit in to Celsius : " + Celsius + "<sup>o</sup>C<br>")

var cel = +prompt("enter Celsius for convert into Fahrenheit", "32");
var fahr = (cel * 9 / 5) + 32;
document.write("Celsius in to  Fahrenheit : " + fahr + "<sup>o</sup>F<br>");

var itm1 = 650
var itm2 = 100
var Qunt1 = 3
var Qunt2 = 7
var Shipping_charges = 100

document.write("Price of item 1 : " + itm1 + " <br>")
document.write("Price of item 2 : " + itm2 + " <br>")
document.write("Quantity of item 1 : " + Qunt1 + " <br>")
document.write("Quantity of item 2 : " + Qunt2 + " <br>")
document.write("Shipping charges : " + Shipping_charges + " <br>")
var Total_Cost_OF_Order = itm1 + itm2 + Shipping_charges;

document.write("<br>" + "Total cost of your order is  : " + Total_Cost_OF_Order + " <br><br>")

var Total_marks = 980;
var Total_Obtained_marks = 804;
document.write("Total Marks : " + Total_marks + "<br>")
document.write("Marks Obtained : " + Total_Obtained_marks + "<br>")
document.write("Perceage is : " + (Total_Obtained_marks * 100) / Total_marks + "<br><br>")


var US_Dollar = 104.80
var Saudi_riyal = 28

document.write("<b>Total Currency in PKR : " + ((US_Dollar * 10) + (Saudi_riyal * 25)) + "<sub>Rs</sub> </b> <br><br>")

var M_num = 5;
document.write((M_num + 5 * 10) / 2);

document.write("<h3>Age Calculator</h3>")

var current_year = 2023;
var Your_birthDay = +prompt("Enter Your Birth Year", "2003");

document.write("Current Year : " + current_year + "<br>")
document.write("Birth Year : " + Your_birthDay + "<br>")
document.write("Your Age  is :<b> " + (current_year - Your_birthDay) + " Years Old</b>  <br><br>")


var radius = 3;
var circumference = Math.PI * 2 * radius;
document.write("The circumference is " + circumference + "<br>");
var area = Math.PI * radius * radius;
document.write("The area is " + area + "<br><br>");

var age = 28;
var MAXage = 100;
var SnackPerDay = 2;
var totalNeed = (SnackPerDay * 365) * (MAXage - age);
var message = 'You will need ' + totalNeed + '  to last you until the ripe old age of ' + MAXage;
document.write(message + "<br><br>");

// // CHAPTER NO 6-9 
// // ******************* MATH EXPRESSIONS ***************************

var A = 10;
document.write("The Value OF (A) is : " + A + "<br>");
document.write("The Value OF (A * 2) is : " + A * 2 + "<br>");
document.write("The Value OF (A / 5) is : " + A / 5 + "<br>");
document.write("The Value OF (A - 1) is : " + (A - 1) + "<br>");

var a = 1, b = 2;

document.write("<br>" + "vaule of (a) : " + a + "<br>" + "vaule of (b) : " + b + "<br><br>");
document.write("--a : " + (--a) + "<br>");
document.write("--a - --b : " + (a - --b) + "<br>");
document.write("--a - --b + ++b : " + (--a - --b + ++b) + "<br>");
document.write("--a - --b + ++b + b-- : " + (--a - --b + ++b + b--) + "<br>");

var result = --a - --b + ++b + b--;


document.write("<br>" + "a = " + a + "<br>");

document.write("b = " + b + "<br>");
document.write("Result's Value : " + result + "<br>");

var userName = prompt("Enter your user name", "Aqib");

document.write("<br>" + "Hello " + userName + " Wellcome to our Website" + "<br>");

var whichTable = +prompt('Enter a Table Nunber which one You want', "9");
if (whichTable <= 0 || whichTable == null || whichTable == undefined || whichTable == NaN) { whichTable = 5; }
document.write(whichTable + " :  1  X  = " + whichTable * 1 + "<br>")
document.write(whichTable + " :  2  X  = " + whichTable * 2 + "<br>")
document.write(whichTable + " :  3  X  = " + whichTable * 3 + "<br>")
document.write(whichTable + " :  4  X  = " + whichTable * 4 + "<br>")
document.write(whichTable + " :  5  X  = " + whichTable * 5 + "<br>")
document.write(whichTable + " :  6  X  = " + whichTable * 6 + "<br>")
document.write(whichTable + " :  7  X  = " + whichTable * 7 + "<br>")
document.write(whichTable + " :  8  X  = " + whichTable * 8 + "<br>")
document.write(whichTable + " :  9  X  = " + whichTable * 9 + "<br>")
document.write(whichTable + " : 10  X  = " + whichTable * 10 + "<br><br>")

var English = +prompt('Enter you Obtained Mark of English', '59')
var Urdu = +prompt('Enter you Obtained Mark of Urdu', '87')
var Maths = +prompt('Enter you Obtained Mark of Math', '91')
var TotalMarksForAllsubject = 100;

document.write("<h2> Subject total marks Obtained Marks Percentage </h2> <br>");
document.write("English  100  into " + English + " :  per " + (English * 100 / TotalMarksForAllsubject) + "% <br>");
document.write("English  100  into " + Urdu + " :  per " + (Urdu * 100 / TotalMarksForAllsubject) + "% <br>");
document.write("English  100  into " + Maths + " :  per " + (Maths * 100 / TotalMarksForAllsubject) + "% <br>");
var TotalMarksObtained = English + Urdu + Maths;
console.log(TotalMarksObtained)
document.write("<h3> Total Marks is : " + TotalMarksObtained + " Total Percentage is :" + (TotalMarksObtained * 100 / 300) + " </h3> <br><br>")

// // CHAPTER NO 9-11 
// // ******** USER INPUT & CONDITIONAL STATEMENT *********

var City_name = prompt("Enter you City", "karachi");

if (City_name == "karachi") {
    document.write("<h2>Wellcome To The City of Lights</h2>")
} else if (City_name == "lahore") {
    document.write("<h2>Wellcome To The City of Gardens </h2>")
} else if (City_name == "islamabad") {
    document.write("<h2>Wellcome To The Green City</h2>")
} else if (City_name == "peshawar") {
    document.write("<h2>Wellcome To The City of Flowers</h2>")
}

var gender = prompt("Enter your Gender Male Or Female ? ", "male");

if (gender == "male") {
    document.write("<h2>Good Morning Sir.</h2>")
} else if (gender == "female") {
    document.write("<h2>Good Morning Ma'am.</h2>")
}

var Color = prompt("Enter signal  light color ");

if (Color == "red") {
    document.write("<h4 style='color: red'>Must Stop</h4>")
} else if (Color == "yellow") {
    document.write("<h4  style='color: yellow'>Ready to move</h4>")
} else if (Color == "green") {
    document.write("<h4 style='color: limegreen'>Move now</h4>")
}

var User_fuel_tank = +prompt("Enter how much fuel are remain in your car", "0.20");

if (User_fuel_tank <= 0.25) {
    document.write("<h4 style='color: red'>Please refill the fuel in your car</h4>")
}



var g = 4;
if (++g === 5) {
    alert("given condition for variable a is true");
}

var p = 75;
if (p++ === 76) {
    alert("given condition for variable b is true");
}
var O = 16;
if (O++ === 17) {
    alert("condition 1 is true");
}
if (O === 17) {
    alert("condition 2 is true");
}
if (++O < 18) {
    alert("condition 3 is true");
}
if (O === 18) {
    alert("condition 4 is true");
}

var MaterialCost = 50000;
var LaborCost = 7000;
var TotalCost = MaterialCost + LaborCost;


if (TotalCost === LaborCost + MaterialCost) {
    alert("The cost is equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

document.write("Total marks : " + Total_marks + "<br>");
document.write("Total obtained : " + Total_Obtained_marks + "<br>");
var Student_Percentage = (Total_Obtained_marks * 100) / Total_marks
document.write("Perceage is : " + Student_Percentage + "%<br><br>");

if (Student_Percentage >= 80) {
    document.write("Grade : A-one <br>")
    document.write("Remarks : Excellent <br><br>")

} else if (Student_Percentage >= 70) {
    document.write("Grade : A <br>")
    document.write("Remarks : Good <br><br>")

} else if (Student_Percentage >= 60) {
    document.write("Grade : B <br>")
    document.write("Remarks : You need to improve <br><br>")

} else if (Student_Percentage < 60) {
    document.write("Grade : fail <br>")
    document.write("Remarks : sorry  <br><br>")

}


var Secret_number = 8;
var User_secret_number = +prompt("Guess The Secret Number", "7")
if (Secret_number == User_secret_number) {
    document.write("Bingo! Correct answer<br><br>");
}
if (Secret_number == (User_secret_number + 1) || Secret_number == (User_secret_number - 1)) {
    document.write("Close enough to the correct answer<br><br>");
}

var DIV_number = +prompt("Enter divisible number by 3", "9");
if (DIV_number % 3 == 0) {
    document.write("The number is divisible by 3<br><br>")
} else {
    document.write("The number is not divisible by 3<br><br>")

}

var Odd_even = prompt("Enter a number: ", "4");
if (Odd_even % 2 == 0) {
    document.write("The number is even. <br><br>");
} else {
    document.write("The number is odd. <br><br>");
}

var Temp = +prompt("Enter temperature ", "31");

if (Temp > 40) {
    document.write("It is too hot <b>Out</b>side.<br><br>")
} else if (Temp >= 30) {
    document.write("The Weather today is Normal.<br><br>")
} else if (Temp >= 20) {
    document.write("Today’s Weather is cool.<br><br>")
} else if (Temp >= 10) {
    document.write("OMG! Today’s weather is so Cool.<br><br>")
}

var FirstNumber = +prompt("Enter First Number To Calulate", "25");
var Operator = prompt(" (' + , - , * , / , % ') ?", '/')
var secondNumber = +prompt("Enter Second Number To Calulate", "10");

if (Operator == "*") {
    document.write(FirstNumber + " * " + secondNumber + " = " + (FirstNumber * secondNumber) + "<br><br>")
} else if (Operator == "+") {
    document.write(FirstNumber + " + " + secondNumber + " = " + (FirstNumber + secondNumber) + "<br><br>")
} else if (Operator == "-") {
    document.write(FirstNumber + " - " + secondNumber + " = " + (FirstNumber - secondNumber) + "<br><br>")
} else if (Operator == "/") {
    document.write(FirstNumber + " / " + secondNumber + " = " + (FirstNumber / secondNumber) + "<br><br>")
} else if (Operator == "*") {
    document.write(FirstNumber + " % " + secondNumber + " = " + (FirstNumber % secondNumber) + "<br><br>")
}


//   CHAPTER NO 12-13 
// // ********  IF…ELSE & ELSE IF STATEMENT **************

var UPPER_lower_number = prompt("Enter and Upper , lower case and number", "P");

if (UPPER_lower_number.charCodeAt(0) >= 65 && UPPER_lower_number.charCodeAt(0) <= 90) {
    document.write("<b>uper case <br><br></b>")
}
if (UPPER_lower_number.charCodeAt(0) >= 97 && UPPER_lower_number.charCodeAt(0) <= 122) {
    document.write("<b>lower case <br><br></b>")
}
if (UPPER_lower_number.charCodeAt(0) >= 48 && UPPER_lower_number.charCodeAt(0) <= 57) {
    document.write("<b>its a Number<br><br></b> ")
}

var First_integers = +prompt("Enter any integers number");
var Second_integers = +prompt("Enter second any integers number");

if (First_integers > Second_integers) {
    document.write("First integers is Lagre : " + First_integers) + "<br><br>";
} else if (Second_integers > First_integers) {
    document.write("Second integers is Lagre : " + Second_integers + "<br><br>");
} else if (First_integers == Second_integers) {
    document.write("Both are same value : " + First_integers + "<br><br>");
}

var Neg_Pos_Zero = +prompt("Enter any number like Positive Negative Or zero", "-2");

if (Neg_Pos_Zero > 0) {
    document.write("This " + Neg_Pos_Zero + " is Positive Value <br><br");
} else if (Neg_Pos_Zero <= -1) {
    document.write("This " + Neg_Pos_Zero + " is Negative Value <br><br");
} else if (Neg_Pos_Zero == 0) {
    document.write("This " + Neg_Pos_Zero + " is Zero  <br><br");
}


var vowel = prompt("Enter Any Vowel It return True Otherwise False", "a")
if (vowel.length == 1 && vowel == "e" || vowel == "a" || vowel == "i" || vowel == "o" || vowel == "u") {
    console.log("Vowels are " + true)
} else { console.log("Vowels are " + false) }


var Correct_password = "This is a Correct password"
var User_password = prompt("Enter your password", "This is a Correct password");

if (User_password.length <= 0) {
    console.log("Please enter your password")
} else if (User_password == Correct_password) {
    console.log("Correct! The password you entered matches the original password")
} else {
    console.log("Sorry Password Not Match")
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}


var Live_time = prompt("Enter Live time Is 24 Format", '1700');

if (Live_time >= 0000 && Live_time < 1200) {
    console.log("good Morning")
} else
    if (Live_time >= 1200 && Live_time < 1700) {
        console.log("good afternoon")
    } else
        if (Live_time >= 1700 && Live_time < 2100) {
            console.log("good evening")
        } else
            if (Live_time >= 2100 && Live_time < 2359) {
                console.log("good night")
            }

//  CHAPTER NO 14-16 
// // ******************** Array ******************


var Student_names = []


var Empty_array = new Array(5)

var Srting_array = new Array("one", "tow")

var Num_Array = new Array(10, 20, 30)

var boolean_Array = new Array(true, false)

var MIXED_Array = [1, "Mixed", 2, "Array"]

var Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "Ph"]

document.write("<h2> Qualifications </h2>")
document.write("1) " + Qualifications[0] + "<br>")
document.write("2) " + Qualifications[1] + "<br>")
document.write("3) " + Qualifications[2] + "<br>")
document.write("4) " + Qualifications[3] + "<br>")
document.write("5) " + Qualifications[4] + "<br>")
document.write("6) " + Qualifications[5] + "<br>")
document.write("7) " + Qualifications[6] + "<br>")
document.write("8) " + Qualifications[7] + "<br><br>")



Student_names[0] = 'aqib';
Student_names[1] = 'Yaseen';
Student_names[2] = 'Asim';

var score = [320, 230, 480]

document.write("Score Of " + Student_names[0] + " is " + score[0] + " Percentage : " + (score[0] * 100) / 500 + "% <br>")
document.write("Score Of " + Student_names[1] + " is " + score[1] + " Percentage : " + (score[1] * 100) / 500 + "% <br>")
document.write("Score Of " + Student_names[2] + " is " + score[2] + " Percentage : " + (score[2] * 100) / 500 + "% <br><br>")


document.write("<h2> Colors </h2>")
var color = ["Blue", "Yellow", "green"]

var Add_first_color = prompt("What Color You Want to Add on Begin", "orange")
color.unshift(Add_first_color)
document.write(color + "<br>")


var Remove_End_color = prompt("What Color You Want to Add on Begin", "parpule")
color.push(Remove_End_color)
document.write(color + "<br>")



color.push("limeGreen")
color.push("white")
document.write(color + "<br>")


color.shift()
document.write(color + "<br>")


color.pop()
document.write(color + "<br>")


var Which_index_user_want = prompt("Which Index you want to add add color", "2")
var What_color_Add_at_index = prompt("What Color you want to add oc this index ? ", "offwhite")
color[Which_index_user_want] = What_color_Add_at_index;
document.write(color + "<br>")

var WhichIndex_you_want = prompt("Which Index you want to delete colors", "2");
var How_much_color_uwant_to_delete = prompt("how many color u Want to Delete", "2")
color.splice(WhichIndex_you_want, How_much_color_uwant_to_delete)
document.write(color + "<br><br>")


var Student_score = [320, 230, 480, 120]
document.write("Student Score " + Student_score + "<br>")
Student_score.sort()
document.write("Ordered Student Score " + Student_score + "<br><br>")


var Cities_names = ["Karachi", "Lahore", "Islamabad", "Peshawaar", "Quetta", "Hyderabad"]
document.write("Cities List : <br>" + Cities_names + "<br><br>")
var Selected_cities = [Cities_names[0], Cities_names[3], Cities_names[5]]
document.write("Selected Cities List : <br>" + Selected_cities + "<br><br>")


var Sliced_array = ["This ", "is ", "my ", "cat"];

document.write("Sliceed Array :  " + Sliced_array + "<br>")
var Joined_Array = Sliced_array.join(" ")
document.write("After joining a array :  " + Joined_Array + "<br><br>")




var computer_Devices = ["Keyboard", "Mouse", "printer", "Moniter"]
document.write("<b> Devices </b> : " + computer_Devices + "<br><br>")
document.write(" <b>Out</b> : <br>" + computer_Devices[0] + "<br>")
document.write("<b>Out</b> : <br>" + computer_Devices[1] + "<br>")
document.write("<b>Out</b> : <br>" + computer_Devices[2] + "<br>")
document.write("<b>Out</b> : <br>" + computer_Devices[3] + "<br><br><br>")



document.write("<b> Devices </b>: " + computer_Devices + "<br><br>")
document.write("<b>Out</b> : <br>" + computer_Devices[3] + "<br>")
document.write("<b>Out</b> : <br>" + computer_Devices[2] + "<br>")
document.write("<b>Out</b> : <br>" + computer_Devices[1] + "<br>")
document.write("<b>Out</b> : <br>" + computer_Devices[0] + "<br><br>")



var Mobile_compnys = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2> Moblie Phone Manufacturers</h2>")
document.write(Mobile_compnys[0] + "<br>")
document.write(Mobile_compnys[1] + "<br>")
document.write(Mobile_compnys[2] + "<br>")
document.write(Mobile_compnys[3] + "<br>")
document.write(Mobile_compnys[4] + "<br>")
document.write(Mobile_compnys[5] + "<br><br>")


// // CHAPTER NO 17-20 
// // ***************** ARRAYS AND LOOP **********************

var Muli_2D = [[0, [1], 23], [1012], [2101]];
document.write("<h3>Multidimensional Array</h3>")
document.write(Muli_2D[0] + "<br>")
document.write(Muli_2D[1] + "<br>")
document.write(Muli_2D[2] + "<br><br>")

document.write("<h3> Loop </h3>")
for (let index = 0; index <= 10; index++) {
    document.write(index + "<br>")

}

document.write("<h3> Table </h3>")
var Loop_table_number = +prompt("Enter a Table Number which you want", '7');
var Loop_table_length = +prompt("Enter a Table legnth which you want Table Run", '10');;

for (let i = 1; i <= Loop_table_length; i++) {
    document.write(Loop_table_number + " X " + i + " = " + (Loop_table_number * i) + "<br>")
}

document.write("<br><br>")

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
document.write("<br>")
for (let i = 0; i < fruits.length; i++) {
    document.write("element at Index " + i + " is " + fruits[i] + "<br>")
}

document.write("<br><br>")
document.write("<b> Counting : </b>")
for (let coun = 0; coun <= 15; coun++) {
    document.write(coun, " , ")

}
document.write("<br>")
document.write("<b>  Reverse counting : </b>")
for (let Rev = 10; Rev >= 0; Rev--) {
    document.write(Rev, " , ")

}
document.write("<br>")
document.write("<b> Even : </b>")
for (let Even = 0; Even <= 20; Even++) {
    document.write(Even++, " , ")
}

document.write("<br>")
document.write("<b>Odd : </b>")
for (let Odd = 1; Odd <= 20;) {
    document.write(Odd++, " , ")
    Odd++
}

document.write("<br>")
document.write("<b> Series : </b>")
for (let Even = 2; Even <= 20; Even++) {
    document.write(Even++, "K, ")
}


document.write("<br><br>")

var Bakers = ["cake", "apple pie", "cookie", "chips", "patties"]
var bakeryItem = prompt("welcome to our bakery, what do want to Order sir/Ma'am ?", "cookie");

var bakery_flag = false;

for (var i = 0; i < Bakers.length; i++) {
    if (Bakers[i] == bakeryItem) {
        alert(Bakers[i] + " Is available at index " + (i) + " in our bakery");
        bakery_flag = true

    }
}
bakery_flag = (!bakery_flag) ? alert("We are Sorry to you '" + bakeryItem + "' is Not Available in our bakery") : bakery_flag
var Lagre_number_ind = [24, 53, 78, 91, 12]

var bignumber;

for (let i = 0; i < Lagre_number_ind.length; i++) {
    for (let j = 1; j < Lagre_number_ind.length; j++) {
        for (let k = 2; k < Lagre_number_ind.length; k++) {
            if (Lagre_number_ind[i] > Lagre_number_ind[j] && Lagre_number_ind[i] > Lagre_number_ind[k]) {

                bignumber = Lagre_number_ind[i]

            }
        }
    }

}

(bignumber)

document.write("Array Items : " + Lagre_number_ind + "<br>")
document.write("biggest number : " + bignumber + "<br><br>")


var smallest = Lagre_number_ind[0];



for (var i = 1; i < Lagre_number_ind.length; i++) {
    if (Lagre_number_ind[i] < smallest) {
        smallest = Lagre_number_ind[i];
    }
}



document.write("Array Items : " + Lagre_number_ind + "<br>")
document.write("biggest number : " + smallest + "<br><br>")



for (var rang = 5; rang <= 100; rang += 5) {
    document.write(rang + " , ")
}