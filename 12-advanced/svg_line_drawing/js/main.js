var animateLine = function () {
  $("path").addClass("drawn");
  // $("path").animate({
  //   "stroke-dashoffset" : 0
  // }, 5000);
};

$(document).ready(function () {

  var path = document.querySelector("path");
  var pathLength = path.getTotalLength();

  $("path").css({
    "stroke-dasharray"  : pathLength,
    "stroke-dashoffset" : pathLength
  });

  $("svg").css({
    "opacity" : 1
  });

  animateLine();

});
