import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';  // Import MovieCard component

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies')  // Replace this with the correct API URL
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div className="movie-list">
            <h1>Popular Movies</h1>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;

