var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets",
  model: app.Secret,
  initialize: function () {
    console.log( "A new collection was just added" );

    this.on("add", function ( secret ) {

      var sv = new app.SecretView({
        model: secret
      });
      sv.render();

    });

  }
});

// var secrets = new app.Secrets();
//
// // GET /secrets
// secrets.fetch();
