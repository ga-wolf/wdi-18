console.log("Hello World");

// FORMAT OF A BASIC IF STATEMENT
// if (expression) {
//
// }

if ( true ) {
  console.log("This should run");
}

if ( false ) {
  console.log("This shouldn't run");
}

// If the users age is over or equal to 18
  // Print to the console "You are okay to drink"
// If the user is under 18
  // Print to the console "You aren't okay to drink"
var myAge = 16;

if (myAge >= 18) {
  console.log("You are okay to drink");
} else {
  console.log("You aren't okay to drink");
}

// Given that I have a variable x that contains the number 10 (or 12) and a variable y that contains the number 20
  // If the value of x multiplied by 2 is equal to y
    // Print out Y is double x
  // Otherwise
    // Print out Y is not double x

var x = 10;
var y = 20;

if ( x * 2 === y ) {
  console.log("Y is double x");
} else {
  console.log("Y is not double x");
}

var myName = "Wolf";
var occupation = "Teacher";

if (myName === "Wolf" && occupation === "Teacher") {
  console.log("You probably work at GA");
} else {
  console.log("Some other wolf");
}

var personsAge = 16;
var youthfulHacker = true;

if (personsAge > 18 || youthfulHacker) {
  console.log("You can visit the website");
} else {
  console.log("Redirecting you to mylittlepony.com");
}
// I have been given a users age - it is 16
// The person has said that they are a youthful hacker - true
  // If the person is over 18, or the person is a youthful hacker
    // Visit the website
  // Otherwise
    // Redirect to mylittlepony.com

var age = 42;

if (age > 35) {
  console.log("You can vote and hold any place in government");
} else if (age > 25) {
  console.log("You can vote and run for the senate");
} else if (age > 18) {
  console.log("You can vote");
} else {
  console.log("You have no voice in Government");
}

// I've been given a persons age - it is 45
// If the age is over 35
  // Print "You can vote and hold any place in government"
// If the age is over 25
  // Print "You can vote and run for the senate"
// If the age is over 18
  // Print "You can vote"
// Otherwise
  // Print "You have no voice in Government"

var personsName = "The Blade";
var personsOccupation = "Ping Pong Player";

if (personsName === "The Blade" && personsOccupation === "Teacher") {
  console.log("Good choice");
} else if (personsName === "The Blade" && personsOccupation === "Ping Pong Player") {
  console.log("Horrible choice");
} else {
  console.log("I don't know who you are, I don't know what you want");
}
// If the person is The Blade, and he is a Teacher
  // Print out "Good choice"
// If the person is The Blade, and he is a Ping Pong Player
  // Print out "Horrible choice, though practice does make perfect"
// Otherwise
  // Print out "I don't know who you are, I don't know what you want"

// // Most Basic If Statement Structure
// if (expression) {
//   // Code to execute if truthy
// }
//
// // Most Basic If/Else Statement Structure
// if (expression) {
//   // Code to execute if truthy
// } else {
//   // Code to execute if falsey
// }
//
// // If/else if/else statement
// if (expression) {
//   // Code to execute if expression is considered truthy
// } else if (otherExpression) {
//   // Code to execute if expression wasn't truthy, and otherExpression was truthy
// } else {
//   // Code to execute if nothing else ran
// }

// Comparison Operators
// ==
// === - prefer this, strict equality
// !=
// !== - strict inequality
// <, <=, >=, >

// Logical Operators
// ! - not operator (opposite)
// && - Logical AND, both sides need to be true
// || - Logical OR, one side needs to be true
