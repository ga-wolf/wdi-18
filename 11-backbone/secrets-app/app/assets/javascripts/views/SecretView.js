var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li',

  render: function () {
    var content = "Dummy secret for the moment";
    this.$el.text( content );
    this.$el.prependTo( "#secrets" );
  }
});

window.setTimeout( function () {
  for ( var i = 0; i < 6; i += 1 ) {
    var sv = new app.SecretView();
    sv.render();
  }
}, 300 );
