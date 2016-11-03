// var bill = document.querySelector("#bill");
// bill.style.width = "300px";
// var enlargeBill = null;
//
// var makeBillBigger = function () {
//   var currentWidth = bill.getAttribute( "width" ); // "200"
//   var realWidth = parseInt( currentWidth ); // 200
//   var desiredWidth = realWidth + 1; // 210
//
//   bill.setAttribute( "width", desiredWidth );
//
//   if ( desiredWidth >= 1000 ) {
//     window.clearInterval( enlargeBill );
//   }
// };
//
// enlargeBill = window.setInterval( makeBillBigger, 10 );
//
//
//
//
//
//
//
//
// var bill = document.querySelector("#bill");
// var opacityAnimationID = null; // Explicity empty - we are waiting for the browser to provide it
//
// bill.style.opacity = 1;
//
// var makeBillFade = function () {
//   bill.style.opacity -= 0.01;
//
//   if ( bill.style.opacity < 0.5 ) {
//     window.clearInterval( opacityAnimationID );
//   }
// };
//
// opacityAnimationID = window.setInterval( makeBillFade, 50 );
//
//
//
//
//
// var bill = document.querySelector("#bill");
// var fallingBill = null;
// bill.style.position = "absolute";
// bill.style.top = "0px";
//
// var makeBillFall = function () {
//   // Access the current value
//   var currentTop = parseInt( bill.style.top );
//   // Store the desired value
//   var desiredTop = currentTop + 2;
//   // Set the value
//   bill.style.top = desiredTop + "px";
//
//   if ( desiredTop >= 300 ) {
//     window.clearInterval( fallingBill );
//   }
// };
//
// fallingBill = window.setInterval( makeBillFall, 50 );

var bill = document.querySelector("#bill");
bill.style.position = "absolute";
bill.style.top = "0px";
bill.style.left = "0px";

window.addEventListener("mousemove", function (e) {
  bill.style.top = (e.clientY - 100) + "px";
  bill.style.left = (e.clientX - 100) + "px";
});
