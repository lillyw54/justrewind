// api.js

import axios from 'axios'; // You might need to install axios using: npm install axios

// Set your API base URL
const baseURL = 'https://api.example.com'; // Replace with your actual API base URL

const api = axios.create({
  baseURL,
});

// Define your API endpoints

export const fetchMovies = async () => {
  try {
    const response = await api.get('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Add more API functions as needed

export default api;
