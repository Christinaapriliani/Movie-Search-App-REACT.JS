import React, { useState } from 'react';

function MovieSearch({ searchMovies }) {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim()) {
            searchMovies(query);
            setQuery('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for a movie"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default MovieSearch;
