import React from 'react';

import Icon from "../navbar/icon";

const SearchBar = ({handleSearchChange, handleCloseModal, searchParams}) => (
    <div className="search-bar">
        <form onSubmit={handleCloseModal}>
            <input onChange={handleSearchChange} type="text" placeholder="search" value={searchParams} />
            </form>
    </div>
);

export default SearchBar;