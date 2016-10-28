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
