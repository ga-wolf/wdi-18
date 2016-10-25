// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
var age = 34;

// Store a maximum age into a variable.
var deathAge = 42;

// Store an estimated amount per day (as a number).
var hotDogs = 12;

// Calculate how many you would eat total for the rest of your life.
var daysTilDead = (deathAge - age) * 365.2425;
// Math.ceil will take a floating point number and round it UP (ceil === "ceiling") to the nearest whole number. Because I don't want to be short of hotdogs on my deathbed. 
var hotDogsTilDead = Math.ceil(hotDogs * daysTilDead);

// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var output = "You will need " + hotDogsTilDead + " to last you until the ripe old age of " + deathAge;
console.log(output);
