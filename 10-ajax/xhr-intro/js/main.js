// Everything is stored as a readyState on the request object
  // 0 - Request has been initialised but not sent
  // 1 - Server connection established
  // 2 - Request has been received by the server
  // 3 - Processing response in the browser
  // 4 - Response is ready to be interacted with

// Tell the browser we are about to make a request
// var request = new XMLHttpRequest();
// console.log( request.readyState );
//
// // Give the browser details about the request
// request.open( "GET", "http://omdbapi.com?t=Satantango" );
// console.log( request.readyState );
//
// // Make the request
// request.send();
// console.log( request.readyState );
//
// // Handle the response of the request
// request.onreadystatechange = function () {
//   console.log( request.readyState );
//
//   // If the browser hasn't finished dealing with the response
//     // Don't continue running this function
//   if ( request.readyState !== 4 ) {
//     return false;
//   }
//
//   // Everything is sent as a single string
//   // Even if though the responseText looks like a JS object, it isn't - it's JSON (a string representation)
//   var parsedData = JSON.parse( request.responseText );
//
//   var title = parsedData["Title"];
//   console.log( title );
//
//   // console.log( request.responseText );
//   // console.log( parsedData );
// };

// We need to make sure that the page has loaded
  // We need to add event handlers
    // When those events run, we need to make an XHR request
window.onload = function () {

  var btn = document.querySelector("button");

  btn.addEventListener( "click", function () {
    // Get the input's current value
    // Construct the URL using that value
    // Make the request
    // Once the data comes back...
      // Represent the movie on the page
        // Just the image
        // Create elements using JavaScript
          // document.createElement
  } );

};
