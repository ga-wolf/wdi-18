// var btn = document.querySelector("button");
//
// // node.addEventListener( eventType, callback );
//
// // btn.addEventListener("click", function () {
// //   alert("You just clicked the button");
// // });
//
// var annoyUser = function () {
//   alert("Sorry");
// };
//
// // btn.addEventListener( "click", annoyUser );
//
// var btn = document.querySelector("button");
//
// var changePageAppearance = function () {
//   document.body.style.background = "lightslategray";
// };
//
// // Event listener or an event handler
//                     // event,  callback
// btn.addEventListener( "click", changePageAppearance );
//
//
// var target = document.querySelector("#bill");
//
// var makeBillBigger = function () {
//   target.style.width = "300px";
// };
//
// target.addEventListener( "click", makeBillBigger );
//
//
// // Save the h1 into a variable called myHeading
// // Create a function called changeTextColour
//   // That function should change myHeading's text colour to be salmon
//
// // Add an event handler
//   // When the element is clicked, call changeTextColour
// var myHeading = document.querySelector("h1");
//
// var changeTextColour = function ( specialParameter ) {
//   console.log( specialParameter );
//
//   myHeading.style.color = "salmon";
//   myHeading.style.fontSize = "50px";
//   myHeading.style.fontFamily = "monospace";
// };
//
// myHeading.addEventListener( "click", changeTextColour );
// // myHeading.removeEventListener("click", changeTextColour);
//
// var browserScroll = function () {
//   console.log("The page was scrolled");
// };
//
// // window.addEventListener( "scroll", browserScroll );
//
// var onMouseMove = function ( event ) {
//   var xPos = event.clientX;
//   var yPos = event.clientY;
//
//   console.log( xPos, yPos );
// };
//
// // document.body.addEventListener("mousemove", onMouseMove);
// // document.body.removeEventListener("mousemove", onMouseMove);
//
// var onResize = function () {
//   console.log("The page was resized");
// };
//
// window.addEventListener( "resize", onResize );

var allImages = document.querySelectorAll("img");

var clickedImage = function () {
  // The keyword this is assigned to the DOM node version of the element that was interacted with (the one that fired the event handler)
  this.style.width = "300px";
};

for (var i = 0; i < allImages.length; i += 1) {
  var currentImage = allImages[i];
  currentImage.addEventListener( "click", clickedImage );
}



// var bill = document.querySelector("#bill");
// var billsCallback = function () {
//   bill.style.width = "300px";
// };
// bill.addEventListener( "click", billsCallback );
//
// var cage = document.querySelector("#cage");
// var cagesCallback = function () {
//   cage.style.width = "300px";
// };
// cage.addEventListener( "click", cagesCallback );
//
// var steve = document.querySelector("#steve");
// var stevesCallback = function () {
//   steve.style.width = "300px";
// };
// steve.addEventListener( "click", stevesCallback );

window.setTimeout(function () {
  console.log("This was a delayed by a 1000 milliseconds");
}, 1000);

window.setInterval(function () {
  var bill = document.querySelector("#bill");
  bill.style.width = "250px";
    // parseInt
    // clearInterval
}, 1000);
