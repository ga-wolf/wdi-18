var quotes = [
	"Oh god, hotdog burger man, take me to the drive-in and prove you love me.",
	"How about that shooting in Oregon. Hilarious!",
	"I couldn't give a shit about your stupid little projects.",
	"Get fucked.",
	"I would rather overdose on heroin.",
	"She was less interested in a clear container full of my dead skin flakes than the advertising had led me to believe.",
	"I have seen things today that make me ashamed.",
	"No one likes you, Badger.",
	"I would rather have the shit beaten out of me by Rolf Harris during the fire bombing of Dresden.",
	"Until I puke on a beanbag you can't say a goddamn thing.",
	"Look, I stabbed a few jerks. I'm not ashamed of it, but I didn't start it.",
	"Badger is the finest student I've ever had the pleasure of teaching. He taught me, really."
];

var getJoelism = function() {
  $(".quote p").fadeOut(200, "swing", function() {
		var num = Math.floor(Math.random() * quotes.length);
		$(".quote p").text(quotes[num]);
		$(".quote p").fadeIn();
	});
};

$(document).ready(function() {
	$("button").on("click", getJoelism);
	getJoelism();
});
