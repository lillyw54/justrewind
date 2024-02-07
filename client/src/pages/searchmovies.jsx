// SearchMovies.jsx

import React, { useState, useEffect } from 'react';

const SearchMovies = () => {
  // State to store the search query and search results
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle changes in the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle the search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here (e.g., API call, filtering, etc.)
    console.log('Search query:', searchQuery);

    // For now, let's assume a static list of search results
    const staticSearchResults = [
      { id: 1, title: 'Movie 1', director: 'Director 1' },
      { id: 2, title: 'Movie 2', director: 'Director 2' },
      // Add more movie objects as needed
    ];

    setSearchResults(staticSearchResults);
  };

  useEffect(() => {
    // Uncomment and add your actual logic to fetch search results
    // const fetchSearchResults = async () => {
    //   try {
    //     const response = await yourApiCall(searchQuery);
    //     setSearchResults(response.data);
    //   } catch (error) {
    //     console.error('Error fetching search results:', error);
    //   }
    // };

    // Uncomment and call the function if you have a real API to fetch search results
    // fetchSearchResults();

    // For now, let's assume a static list of search results when the component mounts
    const staticSearchResultsOnMount = [
      { id: 3, title: 'Movie 3', director: 'Director 3' },
      { id: 4, title: 'Movie 4', director: 'Director 4' },
      // Add more movie objects as needed
    ];

    setSearchResults(staticSearchResultsOnMount);
  }, [searchQuery]); // Trigger the effect when searchQuery changes

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> - Directed by {movie.director}
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};

export default SearchMovies;
