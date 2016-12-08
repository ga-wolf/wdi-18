var numbers = [ 1, 2, 3, 4, 5 ];
var camera = {
  brand: "Leica",
  model: "M3",
  memoryCard: false
};

_.each( numbers, function ( num ) {
  console.log( num );
});

_.each( camera, function ( value, key ) {
  var message = "Value: " + value + ". Key: " + key;
  console.log( message );
});

var multiplied = _.map( numbers, function ( num ) {
  return num + "!";
});

console.log( multiplied );
