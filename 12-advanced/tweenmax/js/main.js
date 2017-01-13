var billAnimation = null;

var staggerAnimations = function () {
  var $boxes = $(".box");
  // elements or selector, duration, configuration, delay
  TweenMax.staggerTo( $boxes, 1, {
    rotation: 360,
    opacity: 0,
    yPercent: 100,
    scaleX: 0.5,
    scaleY: 0.5
  }, 0.5 );
};

$(document).ready(function () {

  var $bill = $(".bill");
  billAnimation = TweenMax.to( $bill, 2, {
    left: "90vw",
    top: Math.random() > 0.5 ? "90vh" : "0vh",
    // ease: Bounce.easeOut,
    // ease: Elastic.easeOut.config(1, 0.3),
    repeat: -1,
    // delay: 0.5,
    // repeatDelay: 0.5,
    yoyo: true,
    rotation: 3600,
    // xPercent: 100,
    // yPercent: 100,
    // scaleX: 1.5,
    // scaleY: 1.5,
    onStart: function () {
      // console.log("The animation has started");
    },
    onComplete: function () {
      // console.log("The animation has finished. You could start another one");
    },
    onUpdate: function () {
      // console.log("Bill is updating");
    }
  });

  $(".reverse").on("click", function () {
    billAnimation.reverse();
  });

  $(".pause").on("click", function () {
    billAnimation.pause();
  });

  $(".play").on("click", function () {
    billAnimation.play();
  });

  $(".doubleSpeed").on("click", function () {
    billAnimation.timeScale(2);
  });

  $(".halfSpeed").on("click", function () {
    billAnimation.timeScale(0.5);
  });

  // Add an event listener that fires when the range value changes
    // Get the value of that range
    // Change the time scale of the animation
  $(".speed").on("input change", function () {
    var desiredSpeed = parseFloat( $(this).val() );
    billAnimation.timeScale( desiredSpeed );
  });

  $(".seek").on("input change", function () {
    var desiredPoint = parseFloat( $(this).val() );
    billAnimation.pause();

    billAnimation.seek( desiredPoint );
  });

  $(".progress").on("input change", function () {
    var desiredPoint = parseFloat( $(this).val() );
    billAnimation.pause();

    billAnimation.progress( desiredPoint );
  });

  $(".stagger").on( "click", staggerAnimations );
});
