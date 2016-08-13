var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("we're connected!");
});

var movieSchema = new mongoose.Schema({
    title: { type: String },
    rating: String,
    releaseYear: Number,
    hasCreditCookie: Boolean
});

movieSchema.statics.findAllWithCreditCookies = function(callback) {
  return this.find({ hasCreditCookie: true }, callback);
};

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);

// var thor = new Movie({
//     title: 'Thor',
//     rating: 'PG-13',
//     releaseYear: '2011', // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
//     hasCreditCookie: true
// });

// thor.save(function(err, thor) {
//     if (err) return console.error(err);
//     console.dir(thor);
// });

// Find a single movie by name.
// Movie.findOne({ title: 'Thor' }, function(err, thor) {
//   if (err) return console.error(err);
//   console.dir(thor);
// });

// // Find all movies.
// Movie.find(function(err, movies) {
//   if (err) return console.error(err);
//   console.dir(movies);
// });

// // Find all movies that have a credit cookie.
// Movie.find({ hasCreditCookie: true }, function(err, movies) {
//   if (err) return console.error(err);
//   console.dir(movies);
// });



// Use the helper as a static function of the compiled Movie model.
Movie.findAllWithCreditCookies(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});
