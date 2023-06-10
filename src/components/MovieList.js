import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMovieToFavorites, removeMovieFromFavorites } from '../Store/Action/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';


function MovieList({
  favorites,
  addMovieToFavorites,
  removeMovieFromFavorites,
}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'aa6fc65fcedb7431af3ac2fbe6484cd0';
        const url = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [page, searchQuery]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const toggleFavorite = (movie) => {
    if (favorites.some((favMovie) => favMovie.id === movie.id)) {
      removeMovieFromFavorites(movie.id);
    } else {
      addMovieToFavorites(movie);
    }
  };
  

  return (
    <div className="container">
      <h1>Popular Movies</h1>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="card-container">
        {movies.map((movie) => (
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
            <br></br>
            <div className="favorite-icon" onClick={() => toggleFavorite(movie)}>
                {favorites.some((favMovie) => favMovie.id === movie.id) ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={farHeart} />
                )}
              </div>
          </div>
        ))}

        
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

const mapDispatchToProps = {
  addMovieToFavorites,
  removeMovieFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);