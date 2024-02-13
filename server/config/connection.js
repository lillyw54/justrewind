const mongoose = require('mongoose');

// Define a movie schema
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
});

// Create a Mongoose model based on the movie schema
const Movie = mongoose.model('Movie', movieSchema);

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/just-rewind', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Add movies to the database
const moviesToAdd = [
  { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 }

];

// Save each movie to the database
Promise.all(
  moviesToAdd.map(movieData => {
    const newMovie = new Movie(movieData);
    return newMovie.save();
  })
)
.then(() => {
  console.log('Movies added successfully');
})
.catch((error) => {
  console.error('Error adding movies:', error);
});