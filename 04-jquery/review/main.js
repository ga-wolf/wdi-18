// DOM Selection

var $allHeadings = $( "h1" );

var $bill = $( "#bill" );

var $jennLink = $("a");

var $allParagraphs = $("p");

// DOM Attributes
  // document.querySelector("#bill").getAttribute("src");

var billSrc = $bill.attr("src");
var jennHref = $jennLink.attr("href");

console.log( billSrc );
console.log( jennHref );

  // document.querySelector("#bill").setAttribute("src", "");

$bill.attr("src", "http://placecage.com/gif/200/200");
$jennLink.attr("href", "http://make8bitart.com");
$jennLink.attr("target", "_blank");

// Select
var $heading = $("h1");
// Manipulate
var headingHTML = $heading.html();
// Admire
console.log( headingHTML );

$heading.html("Hello World!!");

// Change the CSS of an element
  // Find the link on the page
  // Call the css method on it
    // Change the color to be hotpink
    // Change the size to be 25px
    // Change the display block

$("a").css({
  color: "hotpink",
  fontSize: "25px",
  display: "block",
  textDecoration: "none"
});

$("h1").css("font-family", "monospace");

// Select the container

console.log( $(".container") );

// Select both columns

console.log( $(".columns") );

// Select both h3s

console.log( $("h3") );

// Select the h3 in column2

console.log( $(".column2 h3") );

// Select the span in the div with the class of container

console.log( $(".container span") );

// DOM Manipulation - working with classes

$("h1").addClass( "mainHeading" );
$("h1").removeClass( "mainHeading" );
$("h1").toggleClass( "mainHeading" );




// Create, manipulate and inject

var $newParagraph = $( "<p></p>" );

$newParagraph.html("This was created by JS");
$newParagraph.addClass("created-by-js");
$newParagraph.css({
  color: "rebeccapurple"
});

$(".container").append( $newParagraph );

console.clear();

var todos = [
  "Have a nice weekend",
  "Eat kettle hotdogs",
  "Learn jQuery",
  "Start on project",
  "Read Crappy Taxidermy"
];

// Loop through all of the todos
  // Create a variable called currentTodo
  // Create a new list item
  // Set the text to be currentTodo
  // Add a class of todo
  // Append it to the ul

for ( var i = 0; i < todos.length; i += 1 ) {
  var currentTodo = todos[i];

  var $newTodo = $( "<li></li>" );
  $newTodo.html( currentTodo );
  $newTodo.addClass("todo");

  $("ul.todos").append( $newTodo );
}

var books = [
  { title: "Godel, Escher and Bach" },
  { title: "Enders Game" },
  { title: "Crappy Taxidermy" },
  { title: "Eloquent JavaScript" }
];

for ( var i = 0; i < books.length; i += 1 ) {
  var currentBook = books[i];
  var $newListItem = $( "<li></li>" );
  $newListItem.addClass("to-read");

  if ( i % 2 === 0 ) {
    $newListItem.css("color", "hotpink");
  } else {
    $newListItem.css("color", "rebeccapurple");
  }

  $newListItem.html( currentBook.title );

  $("ol.library").prepend( $newListItem );
}

// For every book in the library
//   Create a variable called currentBook
//   Create a new list item
//     Give it a class of to-read
//     Change the text colour to be hotpink
//     Change the HTML to be the title of the currentBook
//   Put the elements in the ol.library
// BONUS POINTS: Get the color to change passed on the index

console.clear();

// We have three representations of DOM nodes
  // We have individual DOM nodes
    // document.querySelector("")
  // We have arrays of DOM nodes
    // document.querySelectorAll("")
  // We have jQuery collections of DOM nodes
    // $("")

var allParagraphs = document.querySelectorAll("p");
  // Array of DOM nodes
var $allParagraphs = $("p");
  // jQuery collection of DOM nodes

var $firstParagraph = $("p").eq(0);
var firstParagraphAsDOMNode = $("p")[0];

// $firstParagraph.html() should work
// firstParagraphAsDOMNode.html() definitely won't

$( document.querySelector("p") ).html();
$( $allParagraphs[0] ).html();

console.clear();
//
// $("li").each(function ( index, node ) {
//   var $listItem = $( node );
//   $listItem.html( "List item " + (index + 1) );
// });

var $allItems = $("li");
for ( var i = 0; i < $allItems.length; i += 1 ) {
  var $listItem = $allItems.eq(i); // Get the current list item as a jQuery collection
  $listItem.html( "List item " + (i + 1) );
}
