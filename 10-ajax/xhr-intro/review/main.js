// READY STATES
// We can access these using the xhr request's XHRObject.readyState property.

// 0 - var xhr = new XMLHttpRequest()
// 1 - xhr.open()
// 2 - xhr.send()
// 3 - request is being processed
// 4 - request processed, and response is ready.

// Assemble the URL I want to send the request to:
var u = "http://www.omdbapi.com/?t=";
u += "jaws";

// NEW REQUEST - create a new instance of the XMLHttpRequest object.
var xhr = new XMLHttpRequest();

// OPEN REQUEST - call the open method on the xhr request, passing in two arguments - the HTTP Method (eg 'GET', 'POST') and the URL you want to send the request to:
xhr.open("GET", u);

// LISTEN FOR CHANGES TO THE REQUEST'S READY STATE - the only one we care about at this point is readyState 4 - that is, when the request has been processed, the response has been received and is ready to be used.
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // The response will be stored in the responseText property of the xhr object. But all we get back is a string that _looks_ like a JavaScript Object (this is called 'JSON' - JavaScript Object Notation - a string that is formatted like a JavaScript Object).

    // To turn this into something we can access and manipulate using JavaScript, we need to parse this JSON string as a JavaScript object, by passing the JSON into the JSON Object's .parse method.

    var res = JSON.parse(xhr.responseText);

    // We'll store it in a variable so we can access/manipulate the response using good old fashioned JS methods, like:

    // Object.keys(res);  // Get all the keys in the response.
    // res["Title"]       // Look up the "Title" key in the response.

    // Ordinarily, we'll want to use JavaScript to take values from the response and manipulate the DOM using those values (eg, creating an element, changing the text of that element to be a value in the xhr.responseText and appending it to the DOM).
  }
};

// SEND REQUEST
xhr.send();
