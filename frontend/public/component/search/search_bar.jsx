import React from 'react';

import Icon from "../navbar/icon";

const SearchBar = ({handleSearchChange, handleCloseModal}) => (
    <div className="search-bar">
        <form onSubmit={handleCloseModal}>
            <input onChange={handleSearchChange} type="text" placeholder="search"/>
            <button type="submit">Search!</button>
        </form>
    </div>
);

export default SearchBar;