// Any JS that doesn't interact with DOM elements, put outside the document ready function:
var playerOneName = "Badger";
var playerOneMoves = [1,2,3];

$(document).ready(function() {
  playerOneName = "Wolf";
  // Any JS that interacts with DOM elements, put inside the document ready function:
  $("#dom_ready_text").text("Stuff about dom readiness");

  $("h2").on("click", function() {
    playerOneName = "Ewelina";
    $(".container").append("<p>You clicked on an h2 tag </p>");
  });

// EVENT DELEGATION
// Attach a listener to an element that will definitely be in the browser when the HTML is parsed, and only respond to clicks within a particular child of that element:
  $(".container").on("click", "p", function() {
    $(".container").append("<p>You clicked on a p tag </p>");
    $container = $(".container");

// METHOD CHAINING:
    // This:
    // $container.css({"backgroundColor" : "red"});
    // $container.find($("h2"));
    // $container.html("Stuff happened");
    // $container.fadeOut();

    // is exactly the same as this:
    $container.css({"backgroundColor" : "red"}).find($("h2").html("stuff happened").fadeOut());
  });

// jQUERY PLUGINS
  $('.plugins').typeIt({
    strings: "jQuery plugins",
    speed: 20,
    lifeLike: false,
    autoStart: true
  });

  $('.plugins_para').typeIt({
    strings: ["Just as jQuery is a library that extends JavaScript, there are libraries (or 'plugins') for jQuery that extend jQuery.", "These are usually used to serve some discrete purpose (like creating an image slider, or some other interactive UI element).", "unheap.com and javascripting.com are a great resource for finding jQuery plugins"],
    speed: 20,
    lifeLike: false,
    autoStart: true
  });





});
