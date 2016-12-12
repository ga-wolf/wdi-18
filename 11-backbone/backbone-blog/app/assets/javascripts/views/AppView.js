var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  initialize: function () {
    // console.log("A new app.AppView was created");
  },
  render: function () {
    // console.log("An instance of app.AppView should be on the page now");
    // Find the template in app.html.erb
    var appViewMarkup = $("#appViewTemplate").html();
    // Put the HTML from that template in the element with the id of app
    this.$el.html( appViewMarkup );

    this.collection.each(function (post) {
      var postListView = new app.PostListView({
        model: post
      });
      postListView.render();
    });
  }
});
