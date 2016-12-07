$(document).ready(function () {

  var $output = $("#output");

  $("#lorem").on("click", function () {
    $output.removeClass("complete");

    $output.load( "../lorem.txt", function () {
      $output.addClass("complete");
    } );
  });

  // Wait for a click on #about
    // Make my AJAX request
      // Put all of the content that was returned into #output

  var getAboutHTML = function () {
    $output.addClass("complete");

    $output.load( "../about.html" );
  };

  $("#about").on( "click", getAboutHTML );

  $("#contact").on("click", function () {
    $output.removeClass("complete");

    $output.load("../contact.html", function () {
      $output.addClass("complete");

      console.log("The new content is now shown");
    });

  });

});
