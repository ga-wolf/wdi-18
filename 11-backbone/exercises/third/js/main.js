var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

var mappedObject = _.mapObject( objectToMap, function ( value, key ) {
  return value * _.random( 1, 100 );
});
console.log( mappedObject );

// Multiply each value in objectToMap by a random number and return an object with the changed values
// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

var pairs = _.pairs( objectToMap );
console.log( pairs );

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

var flippedObj = _.invert( objectToMap );
console.log( flippedObj );

// Remove the "start" key from objectToMap in two different ways
var picked = _.pick( objectToMap, 'middle', 'end' );
var omitted = _.omit( objectToMap, 'start' );

console.log( picked, omitted );
=======
// UNDERSCORE ARRAYS - EXERCISES
// https://gist.github.com/ga-wolf/79539b5b974fe1b56a2c

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort"];
var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
var fives = _.range(30, 101, 5);
console.log(fives);

// Turn bumpyArr into one flat array (no nested arrays)
var flattenedArray = _.flatten(bumpyArr);
console.log(flattenedArray);

// Remove all of the falsey elements in the uncompactedArr
// In JS - null, undefined, false, 0, "" and NaN are all considered falsey.
var compactedArray = _.compact(uncompactedArr);
console.log(compactedArray);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
var uniques = _.union([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]);
console.log(uniques);
// Find the index of the first element in numbers that is over 7 and is even

// var indexOfEight = _.findIndex(numbers, function(n) {
//   return ((n > 7) && (n % 2 === 0));
// });

var numberTest = function(n) {
  return ((n > 7) && (n % 2 === 0));
};

var indexOfEight = _.findIndex(numbers, numberTest);

console.log(indexOfEight);

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
// should end up like { age: NaN, location: undefined }
// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

var unzipped = _.unzip(arrToTransform);

console.table(_.object(unzipped));
