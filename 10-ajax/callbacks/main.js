// var doFirst = function () {
//
//   window.setTimeout(function () {
//     console.log("doFirst");
//   }, 100);
//
// };
//
// var doSecond = function () {
//   console.log("doSecond");
// };
//
// doFirst();
// doSecond();

// var doFirst = function ( callback ) {
//
//   window.setTimeout(function () {
//     console.log("doFirst called");
//     callback();
//   }, 100);
//
// };
//
// doFirst( function () {
//   console.log("doSecond called");
// } );

var totals = [ 92, 94, 89, 99, 100, 96 ];

// for ( var i = 0; i < totals.length; i += 1 ) {
//   var currentScore = totals[i];
//   console.log( currentScore  );
// }

var each = function ( collection, callback ) {
  for ( var i = 0; i < collection.length; i += 1 ) {
    var currentItem = collection[i];
    callback( currentItem );
  }
};

each( totals, function ( currentNum ) {
  console.log( "Current value: ", currentNum );
} );

each( [1, 2, 3, 4, 5], function (num) {
  console.log( num );
} );

var scores = [ "A", "F", "F", "C", "B+" ];
var printOutScore = function ( score ) {
  console.log("Printing out score: " + score);
};

each( scores, printOutScore );

// each( scores, alert );

$(document).ready(function () {

  console.log( "THE PAGE HAS LOADED" );

  $("h1").on("click", function () {
    console.log( "The H1 was clicked" );
  });

  $("p").each(function () {

    $( this ).text( Math.random() );

  });

});

console.log( "End of main.js" );
