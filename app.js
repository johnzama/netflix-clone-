const fetch = require('node-fetch');
require('dotenv').config();  // To load the API key from the .env file

// Fetch popular movies from the TMDb API
const API_KEY = process.env.API_KEY;  // Read API key from environment variables
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

async function fetchMovies() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Popular Movies:", data.results);  // Log the popular movies
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Run the function to fetch and display the movies
fetchMovies();
