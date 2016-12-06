var displayMovie = function ( data ) {
  var $poster = $("img#poster");
  var $title = $("h2#title");
  var $plot = $("p#plot");

  $poster.attr( "src", data.Poster );
  $title.text( data.Title );
  $plot.text( data.Plot );

  $("body").css({
    "background-image": "url(" + data.Poster + ")"
  });
};

var searchOMDB = function ( query ) {
  var baseURL = "http://omdbapi.com";

  $.ajax({
    url: baseURL,
    type: "GET",
    dataType: "JSON",
    data: {
      t: query,
      tomatoes: true,
      plot: "full"
    }
  }).done( displayMovie );
};

$(document).ready(function () {

  var $form = $("form");
  var $searchField = $("input#search");

  $form.on("submit", function ( e ) {
    e.preventDefault();
    var searchTerm = $searchField.val();

    searchOMDB( searchTerm );
  });

});
