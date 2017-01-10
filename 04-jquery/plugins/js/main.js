// $.fn.makeRebeccaPurple = function () {
//   // this refers to the jQuery version of the element that was selected
//   this.css("color", "rebeccapurple");
// };

// IIFE Pattern - Immediately invoked function expression
  // Keeps all of our variables safe
  // We don't have save access to this function
  // We can't call it again by accident

(function ( $ ) {
  var color = "black";

  $.fn.changeColor = function ( c ) {
    color = c || color;
    console.log( color );
    this.css( "color", color );
    return this;
  };
})( jQuery );

$.fn.addRandomNumber = function () {
  this.each(function ( i, el ) {
    var currentHTML = $(el).html();
    var desiredHTML = currentHTML + " - " + Math.random();
    $(el).html( desiredHTML );
  });
  return this;
};
