// var Movie = Backbone.Model.extend({
//   defaults: {
//     title: "N/A",
//     duration: 0,
//     director: "N/A"
//   },
//
//   initialize: function () {
//     console.log( "A new movie was created" );
//
//     this.on("change", function () {
//       console.log("What HAPPENED?!");
//     });
//
//     this.on("change:title", function ( movie, newTitle ) {
//       var message = "The movie titled changed from " + movie.previousAttributes().title + " to " + movie.get("title");
//       console.log( message );
//     });
//
//     this.on("change:duration change:director", function () {
//       console.log("The duration or the director changed");
//     });
//   }
// });
//
// var genericMovie = new Movie();
// console.log( genericMovie );
//
// var bestMovie = new Movie({
//   title: "Satantango",
//   director: "Bela Tarr",
//   language: "Hungarian"
// });
//
// var title = bestMovie.get( "title" );
// var language = bestMovie.get( "language" );
// console.log( title, language );
//
// var theGrinch = new Movie({
//   title: "The Grinch",
//   mainColour: "Green"
// });
// console.log( theGrinch );
//
// var grinchValues = theGrinch.toJSON();
// console.log( grinchValues );
//
// var almostBestMovie = new Movie({
//   name: "Satan"
// });
//
// almostBestMovie.set("name", "Satantango");
//
// almostBestMovie.set({
//   director: "Bela Tarr",
//   duration: 534
// });
// console.log( almostBestMovie.toJSON() );
//
//
// var Cinema = Backbone.Collection.extend({
//   model: Movie,
//   initialize: function () {
//     console.log( "A new cinema was created" );
//
//     this.on("add", function () {
//       console.log( "You just received a new movie" );
//     });
//
//     this.on("remove", function () {
//       console.log("A movie was taken away");
//     });
//   }
// });
//
// var emptyCinema = new Cinema();
//
// var movie = new Movie();
// var cinema = new Cinema( movie ); // Seed our database with one movie
//
// console.log( cinema );
//
// var biggerCinema = new Cinema([
//   bestMovie,
//   genericMovie,
//   theGrinch
// ]);
//
// console.log( biggerCinema );
//
// var newCinema = new Cinema([
//   { title: "Wall-e" },
//   { title: "A Clockwork Orange" },
//   { title: "The Big Lebowski" }
// ]); // Will convert to instances of the Movie model
//
// console.log( newCinema.length );
// newCinema.add({
//   title: "The Man who knew Infinity"
// });
// console.log( newCinema.length );
//
// var generic = new Movie();
// newCinema.add( generic );
//
// console.log( newCinema.length );
//
// var ourMixedCollection = new Cinema([
//   { title: "Movie one", goodMovie: false, tags: ["comedy"] },
//   { title: "Movie two", goodMovie: true, tags: ["action"] },
//   { title: "Movie three", goodMovie: false, tags: ["action"] },
//   { title: "Movie four", goodMovie: true, tags: ["action"] },
//   { title: "Movie five", goodMovie: false, tags: ["horror", "comedy"] },
//   { title: "S movie", tags: ["comedy"] },
//   { title: "s film", tags: ["horror"] },
//   { title: "J movie", tags: ["history", "comedy"] },
//   { title: "z movie", tags: ["documentary"] },
//   { title: "Q movie", tags: ["documentary", "history"] }
// ]);
//
// var searchByTag = function ( tag ) {
//   return ourMixedCollection.filter(function ( movie ) {
//     var tags = movie.get("tags");
//     var tagExists = _.contains( tags, tag );
//
//     return tagExists;
//   });
// };
//
// var allHistoryMovies = searchByTag( "history" );
// var allComedyMovies = searchByTag( "comedy" );
//
// console.log( "Number of history movies: ", allHistoryMovies.length );
// console.log( "Number of comedy movies: ", allComedyMovies.length );
//
// console.log( ourMixedCollection.pluck("title") );
//
//
// // Search by tag function
//   // searchByTag( "comedy" )
//   // searchByTag( "documentary" )
//
//
//
//
//
//
// var badMovies = ourMixedCollection.where({ goodMovie: false });
// ourMixedCollection.remove( badMovies );
// console.log( ourMixedCollection.length );
//
// var searchMovies = function ( letter ) {
//
//   var movies = ourMixedCollection.filter(function (movie) {
//     var lowercasedMovieTitle = movie.get("title").toLowerCase();
//
//     if ( lowercasedMovieTitle.startsWith( letter ) ) {
//       return true;
//     }
//     return false;
//   });
//
//   return movies;
//
// };
//
// console.log( ourMixedCollection.length );
//
// var sMovies = searchMovies( "s" );
// ourMixedCollection.remove( sMovies );
//
// console.log( ourMixedCollection.length );
//
//
// var m1 = new Movie({ id: 200, title: "Satantango" });
// var m2 = new Movie({ id: 201, title: "23" });
// var m3 = new Movie({ id: 202, title: "42" });
// var m4 = new Movie({ id: 203, title: "Duck Soup" });
//
// var moviesWithIDs = new Cinema([m1, m2, m3, m4]);
//
// var firstMovieInCollection = moviesWithIDs.at( 0 ); // Index-based
//
// var movieById = moviesWithIDs.get( 201 );
//
// console.log( movieById );
// console.log( firstMovieInCollection );
//
// var movieName = moviesWithIDs.get( 202 ).get("title");
// console.log( movieName );
//
// var cid = m4.cid;
// console.log( cid );
//
// var c24 = moviesWithIDs.get( cid );
// console.log( c24 );
//
// var m1 = new Movie({ id: 200, title: "Satantango" });
// var m2 = new Movie({ id: 201, title: "23" });
// var m3 = new Movie({ id: 202, title: "42" });
// var m4 = new Movie({ id: 203, title: "Duck Soup" });
//
// var newCinema = new Cinema( [m2, m3] );
// newCinema.add( m4, { at: 0 } );
// newCinema.add( m1, { at: 2 } );
//
// newCinema.each(function (movie) {
//   console.log( movie.get("id") );
// });
//
// var sortedMovies = newCinema.sortBy( "title" );
//
// _.each(sortedMovies, function (movie) {
//   console.log( movie.get("title") );
// });

// var Dog = Backbone.Model.extend({
//   defaults: {
//     name: "Cutie Math.Pi",
//     type: "Floaty"
//   },
//   initialize: function () {
//     console.log("You now own a new dog");
//
//     this.on("change", function ( dog ) {
//       var changedAttributes = dog.changedAttributes();
//
//       _.each( changedAttributes, function (value, key) {
//         console.log( "Value: " + value + ". Key: " + key );
//       })
//     });
//
//     this.on("change:name", function ( dog ) {
//       var oldName = dog.previousAttributes().name;
//       var newName = dog.get("name");
//       var message = oldName + " is now called " + newName;
//
//       console.log( message );
//     });
//   }
// });
//
// var tammy = new Dog({
//   name: "Tammy",
//   type: "Black Tamaskan"
// });
// var gracey = new Dog({
//   name: "Gracey",
//   type: "Golden Retreiver"
// });
//
// var MeggansDogs = Backbone.Collection.extend({
//   model: Dog,
//   initialize: function () {
//     console.log("Meggan has started stealing dogs");
//   }
// });
//
// var meggansDogs = new MeggansDogs( gracey );
//
// gracey.set("name", "Meggan's Gracey");
//
// meggansDogs.add([
//   {}, {}, {}
// ]);
// console.log( meggansDogs.length );
//
// meggansDogs.remove( gracey );
// gracey.set({
//   name: "Gracey"
// });









var Animal = Backbone.Model.extend({
  // Initialize, defaults, URLs, custom methods, add event listeners
  defaults: {
    stripes: 0,
    living: true,
    ecosystem: "",
    type: "animal"
  },

  initialize: function () {
    console.log( "A new animal was created" );

    this.on("change", function () {
      console.log( "An attribute changed" );
    });

    this.on("change:type", function ( animal ) {
      var oldType = animal.previousAttributes().type;
      var newType = animal.get("type");

      var message = "The type changed from " + oldType + " to " + newType;

      console.log( message );
    });
  }
});

var kangaroo = new Animal(); // Get all the default values
kangaroo.set( "ecosystem", "Plains" );
kangaroo.set({
  pouch: true,
  tail: true,
  type: "Giant Kangaroo"
});

var kangarooAttrs = kangaroo.toJSON();
console.log( kangarooAttrs );

var butterfly = new Animal({
  type: "Monarch"
});

var badger = new Animal({
  type: "Badger"
});

var panda = new Animal({
  type: "Panda"
});

var Zoo = Backbone.Collection.extend({
  model: Animal,
  initialize: function () {
    console.log("A new zoo popped up");
    this.on("add", function () {
      console.log("An animal was added, hopefully it wasn't a panda");
    });
    this.on("remove", function ( animal ) {
      var typeOfAnimal = animal.get("type");
      var message = "Be free, sweet " + typeOfAnimal;
      console.log( message );
    });
  }
});

var gaZoo = new Zoo();
gaZoo.add( kangaroo );
gaZoo.add( butterfly );

gaZoo.remove( kangaroo );

var bird = new Animal({ type: "Eagle", living: false });
var dumboOctopus = new Animal({ type: "Dumbo Octopus" });
var japaneseSpiderCrab = new Animal({ type: "Japanese Spider Crab", living: false });
var theGerenuk = new Animal({ type: "Gerenuk" });
var quokka = new Animal({ type: "Quokka" });

gaZoo.add([bird, dumboOctopus, japaneseSpiderCrab, theGerenuk, quokka]);

gaZoo.each(function (animal) {
  var message = "The zoo contains: " + animal.get("type");
  console.log( message );
});

// Remove all dead animals from the gaZoo
var deadAnimals = gaZoo.where({ living: false });
gaZoo.remove( deadAnimals );

var allTypes = gaZoo.pluck("type");
console.log( allTypes );

var sortedByType = gaZoo.sortBy("type");
console.log( sortedByType );

console.clear();

var ZooView = Backbone.View.extend({
  el: "#app",
    // this.el - pure DOM node ( document.querySelector approach )
    // this.$el - jQuery selected DOM node

  events: {
    "click h1": "clickedHeading",
    "click li": "showAnimal",
    "click span": "destroyAnimal"
  },

  destroyAnimal: function ( event ) {
    // Figure out which span was clicked
    var $span = $( event.currentTarget );
    // Find the parent LI of that span
    var $li = $span.parent();
    // Find just the animal type
    var text = $li.text();
    var animalType = text.replace(" | delete", "");
    // Find the animal with that type in the collection
    var animal = this.collection.findWhere({
      type: animalType
    });
    var oldLength = this.collection.length;
    // Remove it
    this.collection.remove( animal );
    console.log( oldLength + " down to " + this.collection.length );
  },

  showAnimal: function ( e ) {
    var $clickedLI = $( e.currentTarget );
    $clickedLI.css({
      color: 'red'
    });
    router.navigate( "/animals/1", true );
  },

  clickedHeading: function () {
    console.log("The heading was clicked");
  },

  initialize: function () {
    console.log( "A new ZooView was created" );
    this.listenTo( this.collection, 'remove', this.render );
    this.listenTo( this.collection, 'add', this.render );
  },

  render: function () {
    var $appViewHome = this.$el;
    $appViewHome.html( "<h1>The animals in our zoo</h1>" );

    var $ul = $("<ul></ul>");

    this.collection.each(function (animal) {
      var type = animal.get("type");
      var $li = $("<li></li>");

      var $span = $("<span></span>");
      $span.text(" | delete");
      $li.text( type );
      $li.append( $span );

      $ul.append( $li );
    });

    $appViewHome.append( $ul );

  }
});

gaZoo.add([
  { type: "Stink Badger" },
  { type: "Horse" },
  { type: "Blue ring octopus" }
]);

var deleteAnimal = function ( name ) {
  var animal = gaZoo.findWhere({
    type: name
  });
  gaZoo.remove( animal );
};

deleteAnimal("Quokka");
deleteAnimal("Horse");

var AnimalView = Backbone.View.extend({
  el: "#app",
  render: function () {
    this.$el.html("<h1>Showing one animal</h1>");
  }
});

var ErrorView = Backbone.View.extend({
  el: "#app",
  render: function () {
    this.$el.html("<h1>SOMETHING WENT WRONG</h1>");
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'showZoo',
    'animals': 'showZoo',
    'animals/:id': 'showAnimal',
    '*args': 'error'
  },
  error: function () {
    var ev = new ErrorView();
    ev.render();
  },
  showAnimal: function () {
    console.log( "An animal should be shown" );
    var av = new AnimalView();
    av.render();
  },
  showZoo: function () {
    console.log("All animals should be shown");
    var zv = new ZooView({
      collection: gaZoo
    });
    zv.render();
  }
});

var router = new Router();

$(document).ready(function () {
  Backbone.history.start();
  // Start listening for hash-based URLs
    // Start calling functions based on the hash fragment
});

var goHome = function () {
  router.navigate("/", true);
};

var animalShowPage = function () {
  router.navigate("/animals/1", true);
};

var throwErrorPage = function () {
  router.navigate( "/asdfghjkl", true );
};

// Models
  // Represent a single resource (typically a single record in a database)
  // Has change events ( "change:type", "change" )
// Collections
  // Represent multiple resources (typically multiple records)
  // Has events ("add", "remove")
// Views
  // We can specify the target element or we can create an element (this.el && this.$el)
  // Can pay attention to passed in collections and models
  // Figure out what data the view needs!
// Routers
  // Decides which view should be showing at a given point
    // Uses the hash fragment
  // To change pages - ` router.navigate("/someURL", true) `
