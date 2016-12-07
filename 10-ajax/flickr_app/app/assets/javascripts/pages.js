// READ THESE!
  // FLICKR API OVERVIEW: https://www.flickr.com/services/api/misc.overview.html
  // FLICKR.PHOTOS.SEARCH OVERVIEW: https://www.flickr.com/services/api/flickr.photos.search.html
  // FLICKR JSON RESPONSE TYPE: https://www.flickr.com/services/api/response.json.html
  // HOW TO DISPLAY AN IMAGE USING FLICKR: https://www.flickr.com/services/api/misc.urls.html
  // AN EXAMPLE OF THE DATA THAT WILL BE RETURNED: https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=Satantango&format=json&nojsoncallback=true

// Overview
  // We need a functions to:
    // Make an AJAX request to Flickr
      // Provide optional and required parameters
    // Iterate through a large number of photos
    // Create an image source
    // Handle creating a single photo
    // Handle user inputs (event handlers)

// Important configuration goes here...
  // API Keys
  // Base URLs
  // Important variables

var API_KEY = "2f5ac274ecfac5a455f38745704ad084";
var BASE_URL = "https://api.flickr.com/services/rest/";

var generateImageURL = function ( photo ) {
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  var url = "https://farm";
  url += photo.farm;
  url += ".staticflickr.com/";
  url += photo.server;
  url += "/";
  url += photo.id;
  url += "_";
  url += photo.secret;
  url += ".jpg";

  return url;
};

var displayPhoto = function ( url ) {
  // Create a new image tag
  // Append it to the body
};

var handleSearchData = function ( data ) {
  var allPhotos = data.photos.photo;

  for ( var i = 0; i < allPhotos.length; i += 1 ) {
    var currentPhoto = allPhotos[i];
    var imageURL = generateImageURL( currentPhoto );
    displayPhoto( imageURL );
  }
};

var searchFlickr = function ( query ) {
  $.ajax({
    url: BASE_URL,
    type: "GET",
    data: {
      method: "flickr.photos.search",
      api_key: API_KEY,
      text: query,
      format: "json",
      nojsoncallback: 1
    }
  }).done( handleSearchData );
  // What is the method?
  // What are you asking for?
  // What parameters are required?
    // api_key: ...
    // method: flickr.photos.search
  // What parameters do you want to pass in?
    // text: QUERY
    // format: json
    // nojsoncallback: 1
};

$(document).ready(function () {

  $("form").on("submit", function ( event ) {
    event.preventDefault();

    var searchTerm = $("#searchFlickr").val();

    if ( searchTerm.length === 0 ) {
      $("#searchFlickr").css("border", "2px solid red");
      return false;
    }

    searchFlickr( searchTerm );
  });

});
