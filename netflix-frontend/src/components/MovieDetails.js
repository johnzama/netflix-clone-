import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();  // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`/api/movies/${id}`)  // Replace with the correct API endpoint
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching movie details:', error));
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetails;

