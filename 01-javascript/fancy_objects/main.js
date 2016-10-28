var PersonFactory = function ( name, occupation ) {
  var person = {};
  person.name = name;
  person.occupation = occupation;
  person.drink = function () {
    console.log("This person is currently drinking");
  };
  person.eat = function () {
    console.log( person.name + " is currently eating" );
  };
  person.work = function () {
    var message = person.name + " is currently working as a " + person.occupation;
    console.log( message );
  };
  return person;
};

var gummo = PersonFactory( "Gummo", "Actor" );
var harpo = PersonFactory( "Harpo", "Great Actor" );




var AnimalFactory = function () {
  var animal = {};
  animal.alive = true;
  animal.type = "Animal";
  animal.eat = function () {
    console.log("Consume something");
  };
  return animal;
};

var genericAnimal = AnimalFactory();

var DogFactory = function (name, breed) {
  var dog = AnimalFactory();
  dog.type = "Dog";
  dog.name = name;
  dog.breed = breed;
  dog.legs = 4;
  dog.bark = function () {
    console.log("Woof");
  };
  dog.loveUnconditionally = function () {
    console.log("Lick");
  };
  return dog;
};

var tammy = DogFactory("Tammy", "Tamaskan");
console.log( tammy );

var UserFactory = function ( name, gender, email ) {
  var user = {};
  user.name = name;
  user.gender = gender;
  user.email = email;
  user.readArticle = function () {
    console.log("Reading...");
  };
  return user;
};

var userOne = UserFactory("Roger", "Male", "quartet@ga.co");
var userTwo = UserFactory("Jane", "Female", "quintet@ga.co");

var AdminFactory = function (name, gender, email) {
  var admin = UserFactory( name, gender, email );

  admin.admin = true;
  admin.postArticle = function () {
    console.log( "Write away, " + this.name );
  };

  return admin;
};

var badger = AdminFactory(
  "Badger",
  "Unknown",
  "badger@ga.co"
);

// Constructor Pattern

var User = function ( name, role ) {
  this.name = name;
  this.role = role;
  return this;
};

var badger = new User("Badger", "TA");
var theBlade = new User("Joel", "Lead Instructor");

var Boat = function ( brand, length ) {
  // this === {}
  this.brand = brand;
  this.length = length;
  this.move = function () {
    console.log("Feel the wind on your eyes");
  };
  return this;
};

var b = new Boat( "Cruise Craft", 35 );
var r = new Boat( "Riveria", 84 );

console.clear();

var Vehicle = {
  type: "Vehicle",
  transport: true,
  makeMove: function () {
    console.log("Currently moving", this);
  }
};
Vehicle.makeMove();

var Car = Object.create( Vehicle );
Car.brand = "Jag";
Car.year = 1964;
Car.type = "E-type mk 3";
Car.noteForBadger = function () {
  console.log("Great end of course present");
};
console.log( Car.transport );
Car.makeMove();
