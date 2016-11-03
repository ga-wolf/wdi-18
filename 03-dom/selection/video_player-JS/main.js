
// Create an array of every link on the page using document.querySelectorAll(cssSelector)

var allLinks = document.querySelectorAll("a");
console.log(allLinks);

// Iterate through the array. In each iteration of the loop:
for (var i = 0; i < allLinks.length; i++) {
// Find the current href using element.getAttribute(name), and store into a variable
  var href = allLinks[i].getAttribute("href");
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  var thumbnailURL = youtube.generateThumbnailUrl(href);
  // Create an IMG element using document.createElement(tagName)
  var thumbnailImage = document.createElement("img");
  // Set the "src" of the IMG element using element.setAttribute(name, value)
  thumbnailImage.setAttribute("src", thumbnailURL);
  // Append the IMG to the link using element.appendChild(element)
  allLinks[i].append(thumbnailImage);

}
