var app = app || {};

app.Post = Backbone.Model.extend({
  urlRoot: "/posts",
  defaults: {
    author: "Anonymous",
    title: "Untitled",
    content: ""
  },
  initialize: function () {
    console.log( "A new post was created" );
  }
});

// var p1 = new app.Post();
// console.log( p1.toJSON() );
//
// var p2 = new app.Post({
//   author: "Not anonymous"
// });
// console.log( p2.toJSON() );
//
// var p3 = new app.Post({
//   author: "Backbone",
//   title: "Backbone Post",
//   content: "Backbone Post"
// });
//
// // If an instance of the model does not have an ID
//   // You can call p3.save();
//     // That would send a post request to the urlRoot property
// // To create a new post, we would typically send a POST request to /posts
//   // Backbone can automate this for us, it does this by using the urlRoot to determine which URL it is talking about, as it doesn't have an ID
//
// p3.save();
//
// // If it does have an ID
//   // For each approach, it will take the ID and put it at the end of the urlRoot
//   // GET request approach
//     // p3.fetch(); // ASKS FOR THE CURRENT VALUE OF THIS POST IN THE DATABASE
//
// // This will get the current values out of the database
//   // Adds the ID of p3 to the urlRoot to determine which URL it is interacting with
// p3.fetch();
//
//   // PUT || PATCH request
//     // p3.save(); // Send whatever the current attributes are in the browser
//
// p3.set("title", "Post (CREATED WITH BACKBONE)");
// // The save method will send a PUT or a PATCH request to urlRoot + the ID of p3
// p3.save();
//
//   // DELETE request approach
//     // p3.destroy();
// p3.destroy();
