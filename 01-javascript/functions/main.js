var sayHello = function () {
  console.log("Hi");
};

// DUPLICATE - CMND + SHIFT + D

sayHello(); // Call site
sayHello(); // Call site
sayHello(); // Call site

// multiplyFiveByFive(); - This shouldn't work

var multiplyFiveByFive = function () {
  console.log( 5 * 5 );
};

multiplyFiveByFive();

// makeSilentNoise();
//
// function makeSilentNoise () {
//   console.log("...");
// }; // Hoisting
//
// makeSilentNoise();

var cubeNumber = function ( x ) {
  var cube = Math.pow( x, 3 );
  console.log( cube );
};

cubeNumber( 15 ); // Parameter || Argument

var sayHi = function ( name ) {
  var greeting = "Hello " + name;
  console.log( greeting );
};

sayHi();
sayHi( "Groucho" );
sayHi( "Harpo" );

var addTwoNumbers = function (x, y) {
  var result = x + y;
  return result;
};

var thirtyNinePlusThree = addTwoNumbers( 39, 3 );
console.log( thirtyNinePlusThree );

var res = addTwoNumbers(10, 3) + addTwoNumbers(5, 6);
console.log( res );

var firstName = "Groucho";
var lastName = "Marx";

var createFullName = function (first, last) {
  var fullName = first + " " + last;
  return fullName;
};

var groucho = createFullName( firstName, lastName );
var harpo = createFullName( "Harpo", lastName );

var whatDoesReturnDo = function () {
  console.log("This should run");
  return 42;
  console.log("Should this?"); // Definitely not
};

whatDoesReturnDo();

// JavaScript has two main types of scope
  // Function scope
  // Global scope

var somethingVeryGlobal = "Very global";
var ourGreeting = function () {

};

var ourFirstContainer = function () {
  var somethingGlobal = "Global";

  var ourSecondContainer = function () {
    var somethingLocal = "Local";
  };

  ourSecondContainer();
};

ourFirstContainer();

var ourGreeting = function () {
  var message = "This is our greeting";
};

ourGreeting();

var firstNumber = 1;

var trapSecondNumber = function () {
  var secondNumber = 2;

  var trapThirdNumber = function () {
    var thirdNumber = 3;
  };
  trapThirdNumber();
};

console.log(firstNumber);
trapSecondNumber();
