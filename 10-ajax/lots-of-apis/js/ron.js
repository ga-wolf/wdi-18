var ronBaseURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
var ronTimer = null;

var displayRonQuote = function ( data ) {
  var quote = data[0];

  var $p = $("<p></p>");
  $p.text( quote );

  $(".swanson .content").prepend( $p );
};

var getRonQuote = function () {
  console.log("Fetching Ron quote...");

  $.ajax({
    url: ronBaseURL,
    type: "GET",
    dataType: "JSON"
  }).done( displayRonQuote );
};

$(document).ready(function () {

  getRonQuote();

  ronTimer = window.setInterval(function () {
    getRonQuote();
  }, 2000);

  $(".swanson button").on("click", function () {
    window.clearInterval( ronTimer );
  });

});
