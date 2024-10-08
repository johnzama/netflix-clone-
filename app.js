const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();  // Load environment variables

const app = express();
const port = 8080;  // The port that the app will listen on

// TMDb API URL
const API_KEY = process.env.API_KEY;
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// Serve a simple webpage displaying movie data
app.get('/', async (req, res) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        // Render movie data as simple HTML
        res.send(`
            <h1>Popular Movies</h1>
            <ul>
                ${data.results.map(movie => `<li>${movie.title}</li>`).join('')}
            </ul>
        `);
    } catch (error) {
        res.status(500).send('Error fetching movies');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
