// UNDERSCORE - COLLECTIONS
// https://gist.github.com/ga-wolf/2c798f28341e2bdd193f

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Iterate through numbers and log each number to the console
_.each(numbers, function(num) {
  console.log(num);
});

// Iterate through numbers and multiply each one of them by 5

var timesFive = _.map(numbers, function(num) {
  return num * 5;
});
console.log(timesFive);

// Iterate through numbers and reduce it by adding them together
var sumOfNumbers = _.reduce(numbers, function(sum, num) {
  return sum + num;
  // sum = 0 ; num = 1 => sum = 1
  // sum = 1 ; num = 2 => sum = 3
  // sum = 3 ; num = 3 => sum = 6
  // sum = 6 ; num = 4 => sum = 10, etc...
}, 0);
console.log(sumOfNumbers);

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Get an array of all of the people in people that have the username "E"
var eName = _.where(people, {username: "E"});
console.log(eName);

// Find the first object in people that has the id of 3
var firstThree = _.findWhere(people, { id: 3 });
console.log(firstThree);

// Find the first person who has an age of less than 50
var youngPerson = _.find(people, function(person) {
  return person.age < 50;
});
console.log(youngPerson);

// Get an array of all of the people with an age of over 60
var oldPeople = _.select(people, function(person) {
  return person.age > 60;
});
console.log(oldPeople);

// Remove all of the people with an age less than 40
var youngPeople = _.reject(people, function(person) {
  return person.age < 40;
});
console.log(youngPeople);
