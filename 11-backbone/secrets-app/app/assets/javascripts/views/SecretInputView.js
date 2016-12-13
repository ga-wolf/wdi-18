var app = app || {};

app.SecretInputView = Backbone.View.extend({
  // We select an element (or create an element)
    // Do this by using el or tagName
  el: "#secretForm",

  // Attach events
  events: {
    'click button': 'createSecret',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function ( e ) {
    var ENTER_KEY = 13;
    if ( e.which === ENTER_KEY && !e.shiftKey ) {
      e.preventDefault();
      this.createSecret();
    }
  },

  createSecret: function ( e ) {
    // I want to select the textarea and get the value of it
    var userInput = this.$el.find("textarea").val();

    var sv = new app.SecretView();
    sv.render();

    // Eventually I want to create a secret with this value
  },

  render: function () {
    console.log( "app.SecretInputView should be on the page" );
    var sivTemplate = $("#SecretInputViewTemplate").html();
    this.$el.html( sivTemplate );
  }
  // Have functions (making sure to have a render)
});
