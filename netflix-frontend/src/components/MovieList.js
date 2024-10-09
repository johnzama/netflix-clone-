import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';  // Import the SearchBar component

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies')  // Replace with the correct API endpoint
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                setFilteredMovies(data.results);  // Initialize filtered movies
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = movies.filter(movie => movie.title.toLowerCase().includes(lowerCaseQuery));
        setFilteredMovies(filtered);
    };

    return (
        <div className="movie-list">
            <h1>Popular Movies</h1>
            <SearchBar onSearch={handleSearch} />  {/* Add the SearchBar */}
            <div className="movies-grid">
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;

