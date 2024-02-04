// localstorage.js

// Function to set an item in localStorage
export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
};

// Function to get an item from localStorage
export const getItem = (key) => {
  try {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  } catch (error) {
    console.error('Error getting item from localStorage:', error);
    return null;
  }
};

// Function to remove an item from localStorage
export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
  }
};
