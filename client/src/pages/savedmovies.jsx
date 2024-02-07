// SavedMovies.jsx

import React, { useEffect, useState } from 'react';

const SavedMovies = () => {
  // State to store the list of saved movies
  const [savedMovies, setSavedMovies] = useState([]);

  // Fetch saved movies from your database or API
  useEffect(() => {
    // Replace this with your actual logic to fetch saved movies
    // For example, you might make an API call using a library like axios
    // const fetchSavedMovies = async () => {
    //   try {
    //     const response = await axios.get('/api/savedmovies');
    //     setSavedMovies(response.data);
    //   } catch (error) {
    //     console.error('Error fetching saved movies:', error);
    //   }
    // };

    // Uncomment and call the function if you have a real API to fetch saved movies
    // fetchSavedMovies();
    
    // For now, let's assume a static list of saved movies
    const staticSavedMovies = [
      { id: 1, title: 'Movie 1', director: 'Director 1' },
      { id: 2, title: 'Movie 2', director: 'Director 2' },
      // Add more movie objects as needed
    ];

    setSavedMovies(staticSavedMovies);
  }, []);

  return (
    <div>
      <h2>Saved Movies</h2>
      {savedMovies.length > 0 ? (
        <ul>
          {savedMovies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> - Directed by {movie.director}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved movies found.</p>
      )}
    </div>
  );
};

export default SavedMovies;
