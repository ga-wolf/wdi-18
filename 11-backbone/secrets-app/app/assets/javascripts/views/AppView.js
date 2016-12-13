var app = app || {};

app.AppView = Backbone.View.extend({
  // this.el and this.$el
  el: "#app",

  render: function () {
    var appViewTemplate = $("#AppViewTemplate").html();
    this.$el.html( appViewTemplate );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();
  }
});
