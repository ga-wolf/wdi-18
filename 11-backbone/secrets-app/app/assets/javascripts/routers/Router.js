var app = app || {};

// This is our routes file, controllers and actions all in one
app.Router = Backbone.Router.extend({
  routes: { // config/routes.rb
    '': 'initializeSecretsApp',
    '*error': 'error'
  },

  // From here, it is controllers and actions
  initializeSecretsApp: function () {
    var appView = new app.AppView();
    appView.render();
  }
});
