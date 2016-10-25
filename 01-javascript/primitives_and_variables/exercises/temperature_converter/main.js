// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
var celsius = 32;

// Convert it to fahrenheit and output "NN°C is NN°F".
var celsiusToFarenheit =  celsius * 1.8 - 3.2;
var outputFarenheit = celsius + "°C is " + celsiusToFarenheit + "°F";
console.log(outputFarenheit);

// Now store a fahrenheit temperature into  a variable.
var farenheit = 105;

// Convert it to celsius and output "NN°F is NN°C."
var farenheitToCelsius = farenheit - 32 / 1.8;
var outputCelsius = farenheit + "°C is " + farenheitToCelsius + "°F";
console.log(outputCelsius);
