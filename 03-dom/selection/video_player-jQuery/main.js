
// Create an array of every link on the page using document.querySelectorAll(cssSelector)
var $allLinks = $("a");
// Iterate through the array. In each iteration of the loop:
$allLinks.each(function() {
  // Find the current href using element.getAttribute(name), and store into a variable
  var href = $(this).attr("href");
  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  var thumbnailURL = youtube.generateThumbnailUrl(href);
  // Create an IMG element using document.createElement(tagName)
  var $img = $("<img>");
  // Set the "src" of the IMG element using element.setAttribute(name, value)
  $img.attr("src", thumbnailURL);
  // Append the IMG to the link using element.appendChild(element)
  $(this).append($img);
});
