var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts': 'index',
    'posts/:id': 'showPost',
    '*args': 'error'
  },

  error: function () {
    var $div = $("<div></div>").attr("id", "error");
    var $h1 = $("<h1></h1>").text( "Something went wrong" );
    $div.append( $h1 );
    $("#app").html( $div );

    window.setTimeout(function () {
      app.router.navigate( "/posts", true );
    }, 2000);
  },

  showPost: function ( id ) {
    // Use the ID provided to find the appropriate post
    var post = app.posts.get( id );
      // Similar to @post = Post.find_by :id => params[:id] in Ruby

    // I want to create a new instance of the PostView, making sure to pass in the post to represent
    var postView = new app.PostView({
      model: post
    });

    // I want to call render
    postView.render();
  },

  index: function () {
    var appView = new app.AppView({
      collection: app.posts
    });
    appView.render();
  }
});
