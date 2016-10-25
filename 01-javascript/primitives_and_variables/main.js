// Primitive Data Types
// Strings

console.log("Hello World");
console.log("It's an orange");
console.log("The person says \"hi\"");

// Declaration and assignment
var myString = "Data contained in a variable";
console.log(myString);
console.log(myString.length); // 28
console.log(myString.toUpperCase());

// Concatenation
console.log("Hello " + "World");

// Numbers

console.log(42);
console.log(1.2);
console.log(100000);
console.log(4 + 2);
console.log(5 - 3);
console.log(4 * 5);
console.log("9 / 2:", 9 / 2);
console.log(5 % 4); // Modulo || Modulus Operator

// Null
  // to be used by a programmer (something is explicity empty)

console.log(null);

// Undefined
  // to be used by JavaScript itself

console.log(undefined);

// Boolean

console.log(true);
console.log(false);



// Variables

var x; // Declaration (I'm setting up a JS identifier that is referencing some place in memory)
console.log("The variable X contains:", x);

x = 5; // Assignment (I'm giving the place in memory a value to store)
console.log("X has been given a value:", x);

x = 10; // Reassignment
console.log("X has been reassigned:", x);

var y = 25 * 2; // Declaration and assignment
console.log("Y:", y);

// Naming conventions
//   Variables can start with letters, _ or $
//   Variables can contain letters, _, $ or numbers
//   Variables are case sensitive
//   Choose clarity and meaning
//   Use camelCase for multipleWords
//   Avoid reserved words

var variablesShouldBeCamelCased = true;

var myName = "Badger";
var greeting = "Hello " + myName; // Concatenation
console.log(greeting);

// Dynamic Typing (Loose Typing)
  // It can change the type of data, and the data itself

var someValue; // Declaration
someValue = "Some string";
someValue = 42;
someValue = true;
someValue = null;
someValue = "Another string";

console.log(someValue);
