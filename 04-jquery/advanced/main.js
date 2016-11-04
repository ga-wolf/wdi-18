// var $heading = $( "h1" );
//
// var headingClicked = function () {
//   console.log("You clicked a heading");
// };
//
// $heading.on( "click", headingClicked );
//
// // Select the element in question
// var $allImages = $( "img" );
//
// // Define the callback function
// var enlargeImage = function () {
//
//   $(this).animate({
//     width: "1500px"
//   }, 100);
//
// };
//
// // Bind the two together to make an event handler or listener
// $allImages.on( "click", enlargeImage );



// Select all paragraphs - var $allParagraphs
// Define a callback called makeHotPink
  // Change the paragraph that was interacted with to have a color of hotpink
// Bind the two together
  // makeHotPink should be called on mouseenter

var $allParagraphs = $( "p" );

var makeHotPink = function ( e ) {

  $(this).css({
    color: "hotpink"
  });

};

$allParagraphs.on( "mouseenter", makeHotPink );

var $input = $( "input" );
var userTypedSomething = function ( event ) {
  $(".letter").append( event.key );
};
$input.on( "keypress", userTypedSomething );

var userClickedSomething = function ( e ) {
  console.log( e );
};

$("body").on( "keyup", userClickedSomething );

var $targetElement = $("h1");

var cssObject = {
  fontSize: "1000px"
};

var timeInMilliseconds = 5000;

var onAnimationComplete = function () {
  console.log("The animation has finished");
};

$targetElement.animate(
  cssObject,
  timeInMilliseconds,
  onAnimationComplete
);
