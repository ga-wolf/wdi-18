var displayMessage = function ( msg ) {
  var $li = $("<li>");
  var text = msg.body + " - by " + msg.author;
  $li.text( text );

  $("#allMessages ul").prepend( $li );
};

var fetchAllMessages = function () {
  console.log("Fetching all messages...");

  $.ajax({
    url: "/messages",
    type: "GET",
    dataType: "JSON"
  }).done(function ( allMessages ) {

    $("#allMessages h3").text( allMessages.length + " messages in total");

    for ( var i = 0; i < allMessages.length; i += 1 ) {
      var currentMessage = allMessages[i];
      displayMessage( currentMessage );
    }

  });
};


// Print out all messages in our system
  // Make a GET request for JSON from /messages
    // Once the data comes back
      // Select #messageCount
        // Change the text to represent how many messages there are
      // Create an unordered list
      // Iterate through the array
        // Add the current message to the list

        // <ul>
        //   <li>First message</li>
        //   <li>Second message</li>
        //   ...
        // </ul>

var displayMessageData = function ( message ) {
  $("#messageOne .body").text( message.body );
  $("#messageOne .author").text( message.author );
};

var getMessageData = function ( id ) {
  $.ajax({
    url: "/messages/" + id,
    type: "GET",
    dataType: "JSON"
  }).done( displayMessageData );
};

var updateDashboard = function (data) {
  $("h2.currentTime").text( data.current_time );
  $("p.lotto").text( data.lucky_numbers );
  $("p.uptime").text( data.uptime );
  $("p.fortune").text( data.fortune );
};

var getDashboardInfo = function () {
  $.ajax({
    url: "/info",
    type: "GET",
    dataType: "JSON"
  }).done( updateDashboard );
};

$(document).ready(function () {

  fetchAllMessages();

  getMessageData( 5 );

  getDashboardInfo();
  // window.setInterval( getDashboardInfo, 1500 );

  $("#fortune button").on("click", function () {

    $.ajax({
      url: "/fortune",
      type: "GET",
      dataType: "TEXT"
    }).done(function (fortune) {
      $("#fortune p").text( fortune );
    });

  });

  $("#uptime button").on("click", function () {

    // What url?
    // What method?
    // What data type?
    // Any data?
    $.ajax({
      url: "/uptime",
      type: "GET",
      dataType: "TEXT"
    }).done(function ( uptime ) {
      $("#uptime p").prepend("<br>").prepend( uptime );
    });

  });


  $("#lucky button").on("click", function () {

    $("#lucky p").load( "/lotto_numbers", function () {
      console.log("Data was successfully loaded");
    });

  });

});
