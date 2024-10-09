import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');  // Initialize the state for selected genre

    useEffect(() => {
        fetch('/api/movies')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                setFilteredMovies(data.results);  // Initialize filtered movies
            })
            .catch(error => console.error('Error fetching movies:', error));

        fetch('/api/genres')  // Fetch movie genres
            .then(response => response.json())
            .then(data => setGenres(data.genres))
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredMovies(filtered);
    };

    const handleGenreSelect = (genreId) => {
        setSelectedGenre(genreId);  // Set the selected genre
        if (genreId === '') {
            setFilteredMovies(movies);
        } else {
            const filtered = movies.filter(movie =>
                movie.genre_ids.includes(parseInt(genreId))
            );
            setFilteredMovies(filtered);
        }
    };

    return (
        <div className="movie-list">
            <h1>Popular Movies</h1>
            <SearchBar onSearch={handleSearch} />
            <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} />
            <div className="movies-grid">
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;

