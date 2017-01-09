// Make sure that all of the elements have loaded
// Find the input
// Add an event listener
  // Get the current value
  // Set the browser base font size

window.onload = function () {

  var rangeInput = document.querySelector("input");

  rangeInput.addEventListener("input", function () {
    var currentVal = rangeInput.value;
    document.querySelector("html").style.fontSize = currentVal + "px";
  });

};
