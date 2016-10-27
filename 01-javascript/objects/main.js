// // Creation
// var emptyObj = {};
//
// var movie = {
//   name: "Satantango",
//   director: "Bela Tarr",
//   duration: 432
// };
//
// var movieName = movie.name;
// var movieDirector = movie.director;
// var movieDuration = movie["duration"];
//
// var bookSeries = {
//   name: "In Search of Lost Time",
//   author: "Marcel Proust",
//   books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//   ]
// };
//
// console.log( bookSeries.author, bookSeries.name );
// console.log( bookSeries.gobbledygook );
//
// // Loop through all of the books in bookSeries
//   // For each iteration:
//     // Create a variable called currentBookName
//     // Log that out
//
// for ( var i = 0; i < bookSeries.books.length; i += 1 ) {
//   var currentBookName = bookSeries.books[i];
//   console.log( currentBookName );
// }
//
// var movie = {
//   name: "Satantango",
//   director: "Bela Tarr",
//   duration: 432
// };
//
// movie.duration = 534; // Reassign
// movie["name"] = "SATANTANGO";
//
// movie.ratingOutOfFive = Number.MAX_SAFE_INTEGER; // Create new keys
//
// console.log( movie );
//
// var bestCamera = {
//   brand: "Leica",
//   model: "M3",
//   year: 1955,
//   memoryCard: "SD"
// };
//
// console.log( bestCamera );
// delete bestCamera.memoryCard;
// console.log( bestCamera );
//
// // for...in loop
// for ( var key in bestCamera ) {
//   var currentValue = bestCamera[key];
//   console.log(
//     "Current key:",
//     key,
//     "Current value:",
//     currentValue
//   );
// }
//
// var allKeys = Object.keys( bestCamera ); // array of all keys - ["brand", "model", "year"]
// for ( var i = 0; i < allKeys.length; i += 1 ) {
//   var currentKey = allKeys[i];
//   var currentValue = bestCamera[currentKey];
//   console.log( currentValue );
// }
//
// console.clear();
//
// var explorer = {
//   firstName: "Jacques",
//   lastName: "Cousteau",
//   birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//   }
// };
//
// var fullName = explorer.firstName + " " + explorer.lastName;
// var birthDay = explorer.birth.day;
// var birthMonth = explorer.birth.month;
// var birthYear = explorer.birth.year;
//
// var explorer = {
//   firstName: "Jacques",
//   lastName: "Cousteau",
//   displayPurpose: function () {
//     console.log("Hello World");
//   },
//   printMessage: function ( msg ) {
//     console.log( msg );
//   }
// };
//
// explorer.displayPurpose();
// explorer.displayPurpose();
// explorer.displayPurpose();
//
// explorer.printMessage( "Hi" );
// explorer.printMessage( "Hello" );
//
// console.clear();
//
// var marxFamily = [
//   { name: "Groucho", birthYear: 1890 },
//   { name: "Harpo", birthYear: 1888 },
//   { name: "Chico", birthYear: 1887 },
//   { name: "Zeppo", birthYear: 1901 },
//   { name: "Gummo", birthYear: 1893 }
// ];
//
// for ( var i = 0; i < marxFamily.length; i += 1 ) {
//   var currentBrother = marxFamily[i];
//   var message = currentBrother.name + " was born in " + currentBrother.birthYear;
//   console.log( message );
// }

var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  occupation: "Explorer",
  status: "Legendary",
  displayFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
  displayOccupationAndStatus: function () {
    var message = this.status + " " + this.occupation;
    return message;
  },
  introduce: function () {
    var fullName = this.displayFullName();
    var occupation = this.displayOccupationAndStatus();
    var message = "Hi there, I am a " + occupation + " named " + fullName;

    return message;
  }
};

explorer.displayOccupationAndStatus();
var greeting = explorer.introduce();

console.log( greeting );
