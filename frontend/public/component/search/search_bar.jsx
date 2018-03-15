import React from 'react';

import Icon from "../navbar/icon";

class SearchBar extends React.Component {
    constructor(){
        super();
    }

    render(){

        return(
            <div className="search-bar">
                <form>
                    <input type="text" placeholder="search"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;