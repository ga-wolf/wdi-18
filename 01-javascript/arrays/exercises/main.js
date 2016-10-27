// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var cats = ["Lewis", "Audrey", "Cooper", "Max", "Sam"];

console.log(cats);

for (var i = 0; i < cats.length; i++) {
  var cat = cats[i];
  var num = i + 1;
  var suffix;
  if (num === 1) {
    suffix = "st";
  } else if (num === 2) {
    suffix = "nd";
  } else if (num === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  console.log("My " + num + suffix + " favourite cat is " + cat);
}
