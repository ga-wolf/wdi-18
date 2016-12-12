var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app",

  render: function () {
    var templateMarkup = $("#postViewTemplate").html();

    var dynamicTemplateMarkup = _.template( templateMarkup );

    var compiledTemplate = dynamicTemplateMarkup( this.model.toJSON()
    );

    this.$el.html( compiledTemplate );
  }
});
