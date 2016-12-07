var baseChuckURL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
var chuckTimer = null;

var displayChuckQuote = function ( data ) {
  var joke = data.value.joke;

  var $p = $("<p></p>");
  $p.text( joke );

  $(".chuck .content").prepend( $p );
};

var getChuckQuote = function () {
  console.log("Fetching Chuck joke...");

  $.ajax({
    url: baseChuckURL,
    type: "GET",
    dataType: "JSON"
  }).done( displayChuckQuote );
};

$(document).ready(function () {

  getChuckQuote();

  chuckTimer = window.setInterval( getChuckQuote, 2000 );

  $(".chuck button").on("click", function () {
    window.clearInterval( chuckTimer );
    alert("Like you can stop Chuck");
    window.setInterval( getChuckQuote, 10 );
  });

});
