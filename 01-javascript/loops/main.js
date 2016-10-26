// Starting Point
// Ending Point - condition on the loop
// Increment - the steps that we take

// var num = 0; // starting point
//
// while ( num < 11 ) { // ending point (condition)
//   console.log( "An iteration ran, num is now:", num );
//   num = num + 1; // step (increment)
// }

// var counter = 5;
//
// while ( counter > 0 ) {
//   console.log( counter );
//   counter -= 1; // Syntatic sugar
// }
//
// console.log("Blast off!");

// var i = 100;
//
// while ( i < 201 ) {
//   console.log( i );
//   i += 10;
// }

// for (start; endCondition; increment) {}

// for (var time = 5; time > 0; time -= 1) {
//   console.log( time );
// }
//
// console.log("Blast off!");

// Print out every 10 numbers from 160 to 220 (including 220)

// for (var y = 160; y <= 220; y += 10) {
//    console.log( y );
// }

// I want to have a function that prints out every five numbers up to a given point
  // everyFiveNumbers( 20 );
  // everyFiveNumbers( 100 );

var everyFiveNumbers = function ( endNum ) {
  for (var i = 0; i <= endNum; i += 5) {
    console.log( i );
  }
};

// everyFiveNumbers( 20 );
// everyFiveNumbers( 100 );

// var printNums = function (startNum, endNum, increment) {};

// Given a range of numbers - 1 to 2000
  // Stop running the loop as soon as the counter is evenly divisible by 42
    // Use the modulo operator! %

for (var counter = 1; counter <= 2000; counter += 1) {
  console.log( counter );
  if ( counter % 42 === 0 ) {
    break;
  }
}

console.log("We found life");
