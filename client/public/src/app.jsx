// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './app.css'; // Import your app.css file

// Import your components
import Movies from './pages/Movies';
import SearchMovies from './pages/searchmovies';
import LoginForm from './components/loginform';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/movies">Movies</Link>
          </div>
          <div>
            <Link to="/search">Search</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </nav>

        <main>
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/search" component={SearchMovies} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </main>

        <footer>
          <p>&copy; 2024 Your Movie Search Engine</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
