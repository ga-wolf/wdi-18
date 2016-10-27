
// Make Arrays

var emptyArray = [];
var alphabet = ["a", "b", "c", "d", "e", "f"];
alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

var alphabetAsString = alphabet.join(', ');

var silly = [
  "",
  1,
  null,
  undefined,
  [ false ],
  true
];

// Accessing elements of an array - Getters

var letterA = alphabet[0];
var tenthLetter = alphabet[9];
console.log( tenthLetter );

var lastLetter = alphabet[ alphabet.length - 1 ];
console.log( lastLetter );

var theValueNull = silly[2];
var undefinedIndex = silly.indexOf( undefined );
var theValueUndefined = silly[ undefinedIndex ];

var theBooleanFalse = silly[4][0];

// Reassigning elements
alphabet[0] = "A";
alphabet[2] = "C";
silly[3] = false;

// Adding elements
var fruits = [
  "Mango",
  "Orange",
  "Banana",
  "Apple",
  "Kiwi Fruit"
];
// Add the string Grapes to the end
fruits.push("Grapes");
// Add the string Blood Orange to the start
fruits.unshift("Blood Orange");

console.log( fruits );

// Removing elements
// Remove the first item of an array
fruits.shift();

// Remove the last item of an array
fruits.pop();
fruits.pop();


// Finding items
var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

var styloIndex = weirdInstruments.indexOf("Stylophone");
console.log( styloIndex );

var pyroIndex = weirdInstruments.indexOf("Pyrophone");
console.log( pyroIndex );

var roliIndex = weirdInstruments.indexOf("Roli Seaboard");
console.log( roliIndex ); // -1

var checkExistence = function ( instrument ) {
  // Does this instrument exist in the weirdInstruments array
    // If it is, print out "Yep, it is in there"
    // Otherwise, print out "No, it isn't"
  if ( weirdInstruments.includes(instrument) ) {
    console.log("Yep, it is in there");
  } else {
    console.log("No, it isn't");
  }
};

checkExistence( "Roli Seaboard" );
weirdInstruments.push("Roli Seaboard");
checkExistence( "Roli Seaboard" );

// Removing Items from an array
var fruits = [
  "Mango",
  "Orange",
  "Banana",
  "Apple",
  "Kiwi Fruit"
];
// .splice( startIndex, howManyItems )
fruits.splice( 1, 3 );
console.log( fruits );

// Copying Arrays
var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

var instrumentsCopy = weirdInstruments.slice();
console.log( instrumentsCopy );

// Make a copy of weirdInstruments - Stylophone through to the Sharpischord
var styloIndex = weirdInstruments.indexOf("Stylophone");
var sharpiIndex = weirdInstruments.indexOf("Sharpischord");

var smallCopy = weirdInstruments.slice( styloIndex, sharpiIndex + 1 );
console.log( smallCopy );

// Looping through arrays
var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone",
  "Roli Seaboard",
  "Teenage Engineering OP-1"
];
console.log( weirdInstruments[0] );
console.log( weirdInstruments[1] );
console.log( weirdInstruments[2] );
console.log( weirdInstruments[3] );
console.log( weirdInstruments[4] );
console.log( weirdInstruments[5] );
console.log( weirdInstruments[6] );

console.clear();

for (var i = 0; i < weirdInstruments.length; i += 1) {
  var currentInstrument = weirdInstruments[i];
  console.log(
    "The index",
    i,
    "represents the",
    currentInstrument
  );
}

var fruits = [
  "Mango", // 0
  "Orange", // 1
  "Banana", // 2
  "Apple", // 3
  "Kiwi Fruit", // 4
  "Blood Orange",
  "Grapes"
];

// Starting point - 0
// Ending point - fruits.length
// Show every item - increment is going to be 1
for ( var i = 0; i < fruits.length; i += 1 ) {
  var currentFruit = fruits[i];
  console.log( currentFruit );
}
