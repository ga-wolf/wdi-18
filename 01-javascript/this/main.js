// Global binding (default)

console.log( this, window === this );

var randomFunction = function () {
  console.log( this, window === this );
};

randomFunction(); // Call site

// Implicit Binding
  // Is the callsite using a method?
  // Is the function stored in an object

var person = {
  varName: "person",
  name: "Groucho",
  sayHi: function () {
    console.log( this, person === this );
  }
};

person.sayHi(); // Callsite

console.clear();

var math = {
  pi: 3.14,
  cos: function () {
    console.log( this, math === this );
  }
};

math.cos(); // Callsite

console.clear();

// Why did the code in question run?
// Where is the call site?
// What does the call site look like?

console.log( this ); // window
var sayHello = function () {
  console.log( this ); // window
};
sayHello(); // Call site

var myObj = {
  someKey: "someValue",
  someFunction: function () {
    console.log( this ); // myObj
    console.log( this.someKey );
  }
};

myObj.someFunction(); // Call site

console.log( this ); // window

console.clear();

// Explicit binding
  // .call, .apply, .bind
  // We are asking JS to set the value of the keyword this to something

var sayHello = function () {
  // console.log( "Hi, I'm " + this.firstName ); // window
  console.log( this );
};
var groucho = {
  firstName: "Groucho",
  lastName: "Marx"
};
var harpo = {
  firstName: "Harpo",
  lastName: "Marx"
};
var zeppo = {
  firstName: "Zeppo",
  lastName: "Marx"
};

// Create a copy of the sayHello function
  // Store it in a variable called grouchosGreeting
  // Anytime it is called, the keyword this needs to represent the groucho object

var grouchosGreeting = sayHello.bind( groucho );
grouchosGreeting();

sayHello.call( harpo );
sayHello.apply( harpo );
var harposGreeting = sayHello.bind( harpo );
harposGreeting();

// sayHello(); // Global or default binding
// sayHello.call( groucho ); // Explicit binding
// sayHello.call( harpo ); // Explicit binding
// sayHello.call( zeppo );
// sayHello.apply( groucho ); // Explicit binding
// sayHello.apply( harpo );
// sayHello.apply( zeppo );

// console.clear();
// var myObj = {
//   someKey: "someValue",
//   someFunction: function () {
//     console.log( "Hello", this ); // myObj
//   }
// };
//
// var f = myObj.someFunction;
// f();
//
// var actualFunction = myObj.someFunction.bind( myObj );
// actualFunction();

console.clear();

// New binding
  // Does the keyword new come before the function call?
  // If it does, the keyword this will represent a new empty object

var Dog = function ( breed ) {
  // {}
  this.breed = breed;
  // { breed: '' }
  this.type = "Dog";
  // { breed: '', type: '' }
  this.eatEndlessly = true;
  // { breed: '', type: '', eatEndlessly: true }
  return this;
};

var lab = new Dog("Labrador"); // Create a new object, set it to the keyword this
var tammie = new Dog("Black Tamaskan");
var mastiff = new Dog("Tibetan Mastiff");


var Book = function ( title, author, alreadyRead ) {
  // if ( alreadyRead ) {
  //   this.alreadyRead = alreadyRead;
  // } else {
  //   this.alreadyRead = false;
  // }
  // {}
  this.title = title;
  // { title: "Swann's Way" }
  this.author = author
  // { title: "Swann's Way", author: "Marcel Proust" }
  this.alreadyRead = alreadyRead || false; // Default parameters
  return this;
};

var swannsWay = new Book("Swann's Way", "Marcel Proust");
var geb = new Book(
  "Godel, Escher and Bach: An Eternal Golden Braid", "Douglas Hofstadter",
  true
);
var inSearch = new Book("In Search of Lost Time", "Marcel Proust");

console.clear();

var globalGreeting = function () {
  console.log( this );
};
globalGreeting();

var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  displayFullName: function () {
    console.log( this.firstName + ' ' + this.lastName );
  }
};

explorer.displayFullName();

var broOne = { name: "Gummo" };
var broTwo = { name: "Harpo" };
var broThree = { name: "Zeppo" };

var sayHi = function () {
  console.log("Hi, I'm " + this.name );
};

sayHi.call( broOne );
sayHi.apply( broTwo );
var zeppoHi = sayHi.bind( broThree );
zeppoHi();

var WaterBottle = function ( brand ) {
  this.brand = brand;
  console.log( this );
  return this;
};

new WaterBottle("Mount Franklin");
new WaterBottle("Cool Ridge");


// Everything comes back to the callsite
  // Find where the code is run
// How was this code actually run?

// Global
  // Look to the left and the right of the functionName
  // If there is no new keyword, if there is no object name, if there is no .call, .apply or .bind
    // It's going to be the global binding - default
// Implicit
  // Look to the left and the right of the functionName
  // If there is an object name before the functionName, this is going to be the implicit binding
// Explicit
  // Look to the left and the right of the functionName
  // Is there .call, .apply or .bind?
    // Whatever is passed in to those methods will be the set to the keyword this
// New
  // If you can see the new keyword
    // The keyword this will represent a new empty object
