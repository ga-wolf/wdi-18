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
