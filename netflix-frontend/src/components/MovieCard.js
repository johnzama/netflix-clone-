import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>Rating: {movie.vote_average}</p>
                    <p>{movie.release_date}</p>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;

