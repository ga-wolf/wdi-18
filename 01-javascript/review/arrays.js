// ARRAY REVISION

// CREATING AN ARRAY - array literal syntax:
var people = ["emmanuel", "samantha", "ewelina", "rhys"];

// GETTING AN ELEMENT IN AN ARRAY

// Use the zero-indexed index of the element in the array using square bracket notation:

console.log(people[0]);

// SETTING AN ELEMENT IN AN ARRAY

// Same approach as GETTING an element in an array, but with an assignment at the end:

people[0] = "tim";

// MANIPULATING ARRAYS

// Adding an element to the end of an array:

people.push("jack");
console.log(people);

// Adding an element to the start of an array:

people.unshift("badger");
console.log(people);

// Removing an element from the start of an array:

people.shift();
console.log(people);

// Removing an element from the end of an array:

people.pop();
console.log(people);

var arr = ["a", "b", "c"];
// SPLICE - Add element to a particular index in the array (without replacing the element at that index)
console.log(arr.splice(1, 0, "b"));

// SPLICE - Replace an element at a particular index in the array
console.log(arr.splice(2, 1, "c"));

// SPLICE - Delete an element at a particular index in the array
console.log(arr.splice(1,1));

// INDEXOF and SPLICE - Find the index of an element in an array and remove it from the array
arr.splice(arr.indexOf("c"), 1);

// OTHER USEFUL ARRAY METHODS

// Reversing the elements in an array:

console.log(people.reverse());

// Sorting the elements in an array;

console.log(people.sort());

// INSPECTING ARRAYS

// Getting the index of an element in an array:
console.log(people.indexOf("samantha"));

// If an array does NOT include an element, the indexOf method will return -1:
console.log(people.indexOf("badger"));

// Using that, doing different things depending on whether an element is in an array or not:
var inArray = function(person) {
  var result = people.indexOf(person);
  if (result > -1) {
    return person + " in the array";
  } else {
    return person + " is not in the array";
  }
};

console.log(inArray("samantha"));
console.log(inArray("badger"));

// As above, but more flexible using arguments (don't have to 'hardcode' the array's variable into the function):

var inArrayNeater = function(person, array) {
  var result = array.indexOf(person);
  if (result > -1) {
    return person + " in the array.";
  } else {
    return person + " is not in the array.";
  }
};

console.log(inArray("samantha", people));
console.log(inArray("badger", people));

// Checking to see whether an array includes an element - could use indexOf, but if you just want a simple true/false:

console.log(people.includes("samantha"));

// ARRAY COMPARISON

// There's no clean, easy way to do this in JavaScript. If you're dealing with primatives, sorting the arrays (if you don't care about the order of the elements), converting them to strings and comparing the strings is handy:

var students = ["emmanuel", "samantha", "ewelina", "rhys"];
var persons = ["emmanuel", "samantha", "ewelina", "rhys"];

console.log(students.sort().join("") === persons.sort().join(""));

// Array iteration

var people = ["emmanuel", "samantha", "ewelina", "rhys"];

for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Briefly, since we're looking at iteration, let's look at how we can do a similar thing with objects:

var badger = {
  age: 34,
  hair: "gross",
  appearance: "also gross"
};

//  for loop using the properties of the object

for (var prop in badger) {
  console.log(prop, badger[prop]);
}

console.log(badger.age);

// Getting the keys of an object using the global JavaScript Object's keys method, passing in the object whose keys you want:

console.log(Object.keys(badger));

// If you wanted to do something with the properties of an object in a particular order (eg, by alphabetically sorting the object's keys)):

var sortedKeys = Object.keys(badger).sort();

for (var i = 0 ; i < sortedKeys.length; i++) {
  console.log(badger[sortedKeys[i]]);
}


// NESTED ARRAYS
var nestedArray = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];

// Accessing elements in the outer array
console.log(nestedArray[1]);
// => ["d", "e", "f"]

// Accessing elements in a nested array
console.log(nestedArray[1][1]);
// => "e"

// Iterating over nested arrays
for (var i = 0; i < nestedArray.length; i++) {
 for (var j = 0; j < nestedArray[i].length; j++) {
  console.log(nestedArray[i][j]);
 }
}
