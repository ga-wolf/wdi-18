// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

// Set up our models (and associations if necessary) on the backend
  // Make sure that they output JSON
// Figure out the load order in application.js
// Set up the models in Backbone
  // Link them to the database using the urlRoot property
// Set up the collections in Backbone (multiple models)
  // Link this to the database using the url property
// Set up the router and follow an error driven development
  // Decide which views should be visible at a given point
// Create the views you need making sure to pass the appropriate data in
