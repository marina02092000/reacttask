// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/Store/store';
import FavoritesPage from './components/FavoritesPage';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
