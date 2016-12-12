var app = app || {};

app.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: app.Post,
  initialize: function () {
    console.log( "A new collection of posts was created" );
  }
});

// app.posts = new app.Posts();
// // The only way we can interact with lots of posts at one time is by sending a GET request to /posts
//   // When we call the fetch method, it will use the url property to determine which path it is talking to
//   // Each piece of data will be turned into an instance of the model specified as well
// app.posts.fetch();
