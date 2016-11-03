// DOM
  // Document Object Model
  // Tree
  // JS Representation of our HTML after parsing

// DOM Selection
  // document.getElementById("id");
  // document.querySelector("cssSelector");
  // document.getElementsByClassName("class");
  // document.getElementsByTagName("tag");
  // document.querySelectorAll("cssSelector");

var heading = document.querySelector("h1");
var image = document.querySelector("img");

var allParagraphs = document.querySelectorAll("p");

for ( var i = 0; i < allParagraphs.length; i += 1 ) {
  var paragraph = allParagraphs[i];
  // Create a variable that references the actual DOM node
  console.log( paragraph );
}

// DOM Attributes

var image = document.querySelector("img#bill");
var src = image.getAttribute("src");
console.log( src );

// image.setAttribute("src", "http://placecage.com/gif/100/100");

var src = image.getAttribute("src");
console.log( src );

var currentText = heading.innerHTML;
console.log( currentText );

heading.innerHTML = "Hello, World";

var currentText = heading.innerHTML;
console.log( currentText );

heading.innerHTML += "!!!";

var currentText = heading.innerHTML;
console.log( currentText );

console.log( heading.classList );

heading.classList.add("important");
console.log( heading.classList );

heading.classList.remove("important");
console.log( heading.classList );

// DOM Style

heading.style.fontFamily = "monospace";
heading.style.color = "hotpink";
heading.style.fontSize = "40px";

var allImgs = document.querySelectorAll("img");

for ( var i = 0; i < allImgs.length; i += 1 ) {
  var currentImage = allImgs[i];
  currentImage.style.display = "block";
}

// Events

// Target Element
  // An individual DOM node (a JS representation of an HTML element)
// Callback
  // A function that will be run by someone else (JS internally, some other piece of code etc.). It's a function that serves a response
// Event listener (handler)
  // Binds a DOM node, an event type, and a callback function

// If someone clicks the heading on the page
  // I want to change the font size to be 400px
var h = document.querySelector("h1");

var makeHeadingBigger = function () {
  h.style.fontSize = "400px";
};

h.addEventListener( "click", makeHeadingBigger );

// If the mouse goes over the img with the id of bill
  // Call a function called makeBillSmaller
    // This should change the width of bill to be 42px

var bill = document.querySelector("#bill");

var makeBillSmaller = function () {
  console.log( this );
  this.style.width = "42px";
};

bill.addEventListener( "mouseenter", makeBillSmaller );

console.clear();

var userMovedMouse = function ( event ) {
  var xCoordinate = event.clientX;
  var yCoordinate = event.clientY;
  console.log( xCoordinate, yCoordinate );
};

document.body.addEventListener(
  "mousemove",
  userMovedMouse
);

// Timers
  // Delay
    // window.setTimeout( callback, delayInMilliseconds );

var delayByOneSecond = function () {
  console.log("I was delayed by a second");
};

window.setTimeout( delayByOneSecond, 1000 );

var everySoOften = function () {
  console.log("I am called every so often");
};

window.setInterval( everySoOften, 1000 );

// Animations
