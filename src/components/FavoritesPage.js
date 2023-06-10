// ./src/components/FavoritesPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeMovieFromFavorites } from '../Store/Action/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function FavoritesPage({ favorites, removeMovieFromFavorites }) {
  useEffect(() => {
    // Any additional logic or API calls you want to perform when the component mounts
  }, []);

  const handleRemoveFromFavorites = (movieId) => {
    removeMovieFromFavorites(movieId);
  };

  return (
    <div className="container">
      <h1>Favorites</h1>
      <div className="card-container">
        {favorites.map((movie) => (
          <div className="card" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="card-image"
              />
            </Link>
            <div className="card-content">
              <Link to={`/movies/${movie.id}`} className="card-title">
                {movie.title}
              </Link>
              <p className="card-overview">{movie.overview}</p>
            </div>
            <div className="favorite-icon" onClick={() => handleRemoveFromFavorites(movie.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, { removeMovieFromFavorites })(FavoritesPage);
