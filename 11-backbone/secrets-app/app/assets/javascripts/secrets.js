var app = app || {};

$(document).ready(function () {

  app.router = new app.Router();
  Backbone.history.start(); // Pay attention to hash fragments!

});
