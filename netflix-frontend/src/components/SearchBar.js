import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);  // Pass the search query to the parent component
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;

