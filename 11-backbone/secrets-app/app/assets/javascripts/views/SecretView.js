var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li',

  render: function () {
    var content = this.model.get( "content" );
    this.$el.text( content );
    this.$el.prependTo( "#secrets" );
  }
});

var createSecretViews = function () {

  secrets.each(function ( secret ) {
    var sv = new app.SecretView({
      model: secret
    });
    sv.render();
  });

};
