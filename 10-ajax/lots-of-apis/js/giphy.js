// Create a variables of important things
  // Base URLs
  // API keys
  // Timer IDs
var giphyBaseURL = "http://api.giphy.com/v1/gifs/random";
var API_KEY = "dc6zaTOxFJmzC";

// Seperate the logic
  // One function that requests information
  // One function that displays information

var displayGif = function ( data ) {
  var imgSrc = data.data.image_url;

  var $newImg = $("<img>");
  $newImg.attr( "src", imgSrc );

  $(".giphy .content").prepend( $newImg );
};

var getGiphyInformation = function ( term ) {
  var params = {
    api_key: API_KEY,
    tag: term
  };

  $.ajax({
    url: giphyBaseURL,
    type: "GET",
    dataType: "JSON",
    data: params
  }).done( displayGif );
};

$(document).ready(function () {

  // $(".giphy button").on("click", function () {
  //   var searchTerm = $(".giphy input").val();
  //
  //   if ( searchTerm.length === 0 ) {
  //     $(".giphy input").css({
  //       "border": "1px solid red"
  //     });
  //     return false;
  //   }
  //   // If there is no search term
  //     // Change the border of the input to red
  //     // Don't call getGiphyInformation
  //
  //   getGiphyInformation( searchTerm );
  // });

  window.setInterval(function () {
    var searchTerm = $(".giphy input").val();
    getGiphyInformation( searchTerm );
  }, 1500);

});
