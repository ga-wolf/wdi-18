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
