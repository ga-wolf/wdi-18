var app = app || {};

app.Secret = Backbone.Model.extend({
  urlRoot: "/secrets",
  defaults: {
    content: "I put bleach in your coffee"
  },
  initialize: function () {
    console.log("A new secret was created");
  }
});

var s = new app.Secret();

// CRUD Operations
// Create
  // POST /secrets => secrets#create
    // This should only run if there is no ID
  // s.save();

// THESE SHOULD ONLY RUN IF THERE IS AN ID
  // Read
    // GET /secrets/:id => secrets#show
  // s.fetch();

  // Update
    // PUT/PATCH /secrets/:id => secrets#update
  // s.set("content", "UPDATED");
  // s.save();

  // Delete
    // DELETE /secrets/:id => secrets#destroy
  // s.destroy();
