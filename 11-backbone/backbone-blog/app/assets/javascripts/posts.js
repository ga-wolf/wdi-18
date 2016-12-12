var app = app || {};

$(document).ready(function () {

  app.posts = new app.Posts();
  app.posts.fetch().done(function () {

    app.router = new app.Router();
    Backbone.history.start();

  });

});
