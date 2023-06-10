import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Class.css';


function Navbar({ favorites }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Movies</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/movies/popular" className="nav-link">Popular Movies</Link>
          </li> */}
          <li className="nav-item d-flex">
          
          <div className="favorites-counter d-flex">
            <span className="favorites-badge mt-2">{favorites.length}</span> 
            <Link to="/favorites" className="nav-link">favorite</Link>
          </div>
              
          </li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(Navbar);