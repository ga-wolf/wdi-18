var app = app || {};

app.PostListView = Backbone.View.extend({
  // tagName will create a new element - $("<li></li>")
    // Assigns the newly created element to:
      // this.el as a pure DOM node
      // this.$el as a jQuery selected DOM node
  tagName: "li",

  events: {
    'click': 'showPost'
  },

  showPost: function () {
    var id = this.model.get("id");
    app.router.navigate( "/posts/" + id, true );
  },

  initialize: function () {
    // console.log("A new instance of app.PostListView");
  },

  render: function () {
    // console.log("An instance of app.PostListView should be on the page");

    var title = this.model.get("title");
    this.$el.text( title );
    this.$el.appendTo( "#posts" );
  }

});
