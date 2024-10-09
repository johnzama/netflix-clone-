import React from 'react';

const GenreFilter = ({ genres, onGenreSelect }) => {
    return (
        <div className="genre-filter">
            <select onChange={(e) => onGenreSelect(e.target.value)}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenreFilter;

