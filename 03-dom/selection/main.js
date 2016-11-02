// document.getElementById( idAsString );

// Traverse the Document Object Model tree
  // When you find an element with the ID of mainHeading
  // Save it in a variable called heading

var heading = document.getElementById("mainHeading");
heading = document.querySelector("#mainHeading");
var importantParagraph = document.getElementById("important");
var bill = document.getElementById("bill");

console.log( heading, importantParagraph, bill );

// document.getElementsByTagName("tag");

var allListItems = document.getElementsByTagName("li");
allListItems = document.querySelectorAll("li");
console.log( allListItems );

for (var i = 0; i < allListItems.length; i++) {
  var currentListItem = allListItems[i]; // A single DOM node
  console.log( currentListItem.innerHTML );
}

var allSpanTags = document.getElementsByTagName("span");
console.log( allSpanTags ); // Array of DOM nodes

for (var i = 0; i < allSpanTags.length; i += 1) {
  var currentSpanTag = allSpanTags[i];
  currentSpanTag.innerHTML = "Span #" + (i + 1);
}

// document.getElementsByClassName("class");
console.clear();
var allTodos = document.getElementsByClassName("todo");
allTodos = document.querySelectorAll(".todo");
console.log( allTodos );

for (var i = 0; i < allTodos.length; i += 1) {
  var currentTodo = allTodos[i]; // Individual DOM node
  console.log( currentTodo );
}

// Loop through all todos
  // Print out the individual DOM nodes


// console.clear();
// HTML5 DOM Access Methods
// document.querySelector( "cssSelector" );
  // Will return a single DOM node
// document.querySelectorAll( "cssSelector" );
  // Will return an array of DOM nodes

var firstCage = document.querySelector(".cage");
  // Individual DOM node - the first one found
console.log( firstCage );

var allCages = document.querySelectorAll(".cage");
  // Array of DOM nodes
console.log( allCages );

var allLorem = document.querySelectorAll(".lorem");
console.log( allLorem );

var firstLorem = document.querySelector(".lorem");
console.log( firstLorem );

console.clear();

var orderedListItems = document.querySelectorAll("ol li");
console.log( orderedListItems );

console.clear();
var bill = document.querySelector(".manipulateBill");

var billSrc = bill.getAttribute("src");
console.log( billSrc );

bill.setAttribute("src", "http://placecage.com/gif/320/300");







var gaLink = document.querySelector(".ga");
var gaHref = gaLink.getAttribute("href");
console.log( gaHref );

gaLink.setAttribute("href", "https://generalassemb.ly");

gaHref = gaLink.getAttribute("href");
console.log( gaHref );

console.log( gaLink.innerHTML );

gaLink.innerHTML = "A link to General Assembly";

console.log( gaLink.innerHTML );

// Adding and removing classes
  // Find the DOM node
  // Manipulate
  // node.classList.add();
  // node.classList.remove();
console.clear();
var ga = document.querySelector(".ga");
var gaClasses = ga.classList;
console.log( gaClasses );

ga.classList.add("anotherClass");
console.log( ga.classList );

ga.classList.remove("anotherClass");
console.log( ga.classList );

ga.innerHTML += " - <strong>a hopefully good place</strong>";

// DOM Node Manipulation
  // Get and set attributes
    // node.getAttribute("href");
    // node.setAttribute("href", "desiredValue");
  // Add and remove classes
    // node.classList.add("class");
    // node.classList.remove("class");
  // Change text
    // node.innerHTML = "";
    // node.innerHTML += "";

var body = document.body;
body.style.backgroundColor = "lightslategray";
body.style.textAlign = "center";
body.style.fontFamily = "monospace";

var ga = document.querySelector(".ga");
ga.style.color = "hotpink";
ga.style.fontSize = "40px";
ga.style.display = "block";
ga.style.textDecoration = "none";
