import React from 'react';

import Icon from "../navbar/icon";

class SearchBar extends React.Component {
    constructor({handleSearchChange, handleCloseModal}){
        super();

        this.state = {
            handleSearchChange: handleSearchChange, 
            handleCloseModal: handleCloseModal
        };
    }

    render(){

        return(
            <div className="search-bar">
                <form onSubmit={this.state.handleCloseModal}>
                    <input onChange={this.state.handleSearchChange} type="text" placeholder="search"/>
                    <button type="submit">Search!</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;