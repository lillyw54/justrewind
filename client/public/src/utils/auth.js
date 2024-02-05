// auth.js

import jwtDecode from 'jwt-decode'; // You might need to install jwt-decode using: npm install jwt-decode

// Key for storing the authentication token in localStorage
const AUTH_TOKEN_KEY = 'authToken';

// Function to set the authentication token in localStorage
export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

// Function to get the authentication token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

// Function to remove the authentication token from localStorage
export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const authToken = getAuthToken();
  return authToken && jwtDecode(authToken).exp > Date.now() / 1000;
};

// Function to decode the authentication token
export const decodeAuthToken = () => {
  const authToken = getAuthToken();
  return authToken ? jwtDecode(authToken) : null;
};
