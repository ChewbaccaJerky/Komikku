import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="navbar">
                <Link to="/"><h1>Dashboard</h1></Link>
                <Link to="/"><h1>Search</h1></Link>
                <Link to="/"><h1>Categories</h1></Link>
                <Link to="/"><h1>Favorites</h1></Link>
            </div>
        );
    }
}

export default NavBar;