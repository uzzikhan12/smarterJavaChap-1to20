// chapter#1

// prompt ("First Name");
// prompt ("Last Name");
// prompt ("Email address");
// prompt ("Phone num");
// prompt ("Password");
// alert ("You're learning JavaScript!");
// alert ("Hello World");


// chapter#2

// var firstName ;
// firstName = "Uzaifa" ;

// chapter#3

let caseQty ;
caseQty = 144;
let sumNum = 9 ;
sumNum = 9 + 5 ;
var totalNum;
totalNum = caseQty + sumNum;
console.log (totalNum);

//chapter#4

var productCost = 3.45;
var nameOfBand ;
var uzaifaRashid ;

// var myVariable;  //legal
// var _underscoreVariable;  //legal
// var variable123;  //legal
// var camelCaseVariable;  //legal

// let 123variable;   // Illegal
// let variable name;  // illegal
// let my-variable;    // illegal
// let let;           // illegal



// chapter#5

// answer#1
// The arithmetic operator that gives you the remainder when one number is divided by another is called the "modulo" operator. In JavaScript, the symbol for the modulo operator is %.

// answer#2
var num = 20 % 6;
console.log(num);

// answer#3
var largeNum = 1000 * 2000 ;

// answer#4
var variable1 = 10;
var variable2 = 5;
var resultSubtraction = variable1 - variable2;

// answer#5
let randomVariableName = 17 % 5;

// answer#6
let num1 = 8;
let num2 = 6;
alert(num1 * num2);


// chapter#6

// answer#1
// Short form using increment operator
x++;
// or
// Short form using addition
x += 1;

// answer#2
x--;

// answer#3
var x = 50;
var y = x++;

// answer#4
var y = 50;
var z = --y;

// answer#5
let newNum = --num;

// answer#6
let originalValue = 5;
let newValue = originalValue++;
// After this statement, originalValue will be 6, and newValue will be 5

// answer#7
let myNumber = 10;
myNumber++;
alert(myNumber); // This will display an alert with the value 11


// chapter#7

// answer#1
var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum);

// answer#2
var calculatedNum2 = (2 + 2) * 6;
console.log(calculatedNum2);

// answer#3
var calculatedNum3 = (2 + 2) * (4 + 2);
console.log(calculatedNum3);

// answer#4
var calculatedNum4 = ((2 + 2) * 4) + 2;
console.log(calculatedNum4);

// answer#5
var cost = (2 + 2) * (4 + 10);
console.log(cost);

// answer#6
var cost2 = 2 + (2 * 4) + 10;
console.log(cost2);

// answer#7
var cost3 = (4 / 2) * 4;
console.log(cost3);


// chapter#8

// answer#1
var quotationNum = "2" + "2"; //answer is 22
console.log (quotationNum);

// answer#2
let message = ("Hello" + "Dolly");
alert(message);

// answer#3
alert("33" + 3);

// answer#4
alert("Pakistan " + "Zindabad");

// answer#5
let stringNumberConcatenation = "The number is: " + 42;

// answer#6
let firstString = "Hello, ";
let secondString = "world!";
let concatenatedString = firstString + secondString;


// chapter#9

// answer#1
let firstName = prompt("Enter first name");

// answer#2
let country = prompt("Country?", "China");

// answer#3
var yourName = prompt("Enter Your Name");

// answer#4
let userResponse = prompt("Please enter something", "Default Value");

// answer#5
let message2 = "Enter your favorite color:";
let defaultResponse = "Blue";
let userColor = prompt(message, defaultResponse);

// answer#6
let userResponse2 = prompt("Enter your age:", "25");
alert("Your age is: " + userResponse2);


// chapter#10

// answer#1
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}

// answer#2
if (x === y) {
    var z = prompt("Enter the value of z?");
}

// answer#3
var ZipCode = "10010";
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// answer#4
// if (yourVariable === 42) {
    // yourVariable = 1;
//   }

  
// chapter#11

// answer#1
if (variable1 !== variable2) {
}

// answer#2
// if (value1 >= value2) {
// }

// answer#3
// if (yourVariable !== 42) {
    // yourVariable = 7;
// }

// answer#4
let number = 10;
if (number !== 5) {
    alert("Congratulations!");
}

// answer#5
let enteredName = prompt("Enter your first name:");
let anotherName = "John";

if (enteredName !== anotherName) {
    alert("No match");
}


// chapter#12

// answer#1
let variable3 = 5;
let variable4 = 3;

if (variable3 >= variable4) {
    alert("Variable1 is greater than or equal to Variable2");
} else {
    alert("Variable1 is less than Variable2");
}

// answer#2
let marks = prompt("Enter your marks:");
let percentage = (marks / 100) * 100;

if (percentage >= 90) {
    alert("Your grade is A");
} else if (percentage >= 80) {
    alert("Your grade is B");
} else if (percentage >= 70) {
    alert("Your grade is C");
} else {
    alert("You need improvement");
}

// answer#3
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// answer#4
let userCity = prompt("Enter a city:");

if (userCity === "Karachi") {
    alert("It is Karachi!");
} else if (userCity === "Lahore") {
    alert("It is Lahore!");
} else {
    alert("It is neither Karachi nor Lahore.");
}


// chapter#13

// answer#1
if (a === b && c === d) {
    
}

// answer#2
if (a === b || c !== d) {
}

// answer#3
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
}

// answer#4
let variable1 = 5;
let variable2 = 10;

if (variable1 < variable2 || variable1 > variable2) {
    alert("The condition is true!");
}

// answer#5
let firstNameVariable = "YourFirstName";
let lastNameVariable = "YourLastName";

let userFirstName = prompt("Enter your first name:");
let userLastName = prompt("Enter your last name:");

if (userFirstName === firstNameVariable && userLastName === lastNameVariable) {
  alert("Your first and last names match!");
}


// chapter#14

// answer#1
let password = "somePassword";

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// answer#2
if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }

// answer#3
if (a === 1 && c === "Max") {
    alert("OK");
}

// answer#4
let variable5 = 5;
let variable6 = 5;

if (variable5 === variable6) {
  if (variable5 <= variable6) {
    alert("Conditions are met!");
  }
}


// chapter#15

// answer#1
let emptyArray = [];

// answer#2
let arrayWithString = ["Hello"];

// answer#3
var alphabet = ["h","i","j","k"];
alert(alphabet[2]);

// answer#4
var alphabet = ["h","i","j","k", "l","m", "n", "o"];
var totalLength = alphabet.length;
console.log(totalLength);

// answer#5
let myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]);



// chapter#16

// answer#1
let myArray = ["First Element"];
myArray.push("Second Element");
alert(myArray[myArray.length - 1]);

// answer#2
var alphabet = ["h","i","j","k"];
alphabet.pop();
console.log(alphabet);

// answer#3
var alphabet = ["h","i","j","k"];
alphabet.push(42);
console.log(alphabet);



// chapter17 to 20


// answer#1
for (let i = 0; i < 10; i++) {
}

// answer#2
for (let i = 0; i <= 11; i++) {
}

// answer#3
for (var i = 0; i <= 4; i++)

// answer#4
for (let j = 0; j < 100; j++) {
}

// answer#5
for (let i = 3; i > 0; i--) {
    
}

// answer#6
let arrayLength = myArray.length;

// answer#7
let flag = true; 

// answer#8
for (let i = 0; i < pets.length; i++) {
}

// answer#9
for (let i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}

// answer#10
let usernames = ["John", "Jane", "Doe"];
let firstName = prompt("Enter first name");

for (let i = 0; i < usernames.length; i++) {
    if (firstName === usernames[i]) {
        alert("Enter");
        break;
    } else {
        alert("Please write correct username");
        break;
    }
}

// answer#11
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
};

if (!matchFound) {
    alert("Match not found");
}

// answer#12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}


















