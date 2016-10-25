// The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 20;

// Calculate the circumference based on the radius, and output "The circumference is NN".

// I could look up the value of pi and put the value to n decimal places here, but instead I'm going to use the PI property of JavaScript's global Math object.

// Check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
var circumference = 2 * Math.PI * radius;
var outputCircumference = "The circumference is " + circumference;
console.log(outputCircumference);

// Calculate the area based on the radius, and output "The area is NN".

// Instead of using radius * radius to calculate radius to the power of two, I'll use the Math object's pow method, which is basically a function that takes two arguments - a base number and an exponent.

// Check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
var area = Math.PI * Math.pow(radius, 2);
var outputArea = "The area is " + area;
console.log(outputArea);
