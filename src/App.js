import React, { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = useState([]);

    const searchMovies = async query => {
        const apiKey = 'YOUR_OMDB_API_KEY'; // Ganti dengan kunci API OMDb yang valid
        const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setMovies(data.Search || []);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div>
            <h1>Movie Search App</h1>
            <MovieSearch searchMovies={searchMovies} />
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
