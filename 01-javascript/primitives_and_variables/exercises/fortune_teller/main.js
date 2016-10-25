// Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title.
var children = 3;
var partner = "Kristy";
var geoLocation = "Sydney";
var job = "Billionaire";

// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var fortune = "You will be a " + job + " in " + geoLocation + ", and married to " + partner + " with " + children +  " kids.";

// Why am I storing the concatenated strings in a variable and then logging out that variable? Because in practice, I probably want to do other things with the value stored in that variable. Now can I easily just refererence the variable by name.
console.log(fortune);
