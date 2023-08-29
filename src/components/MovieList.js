import React from 'react';

function MovieList({ movies }) {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <span>{movie.Title}</span>
                </li>
            ))}
        </ul>
    );
}

export default MovieList;
