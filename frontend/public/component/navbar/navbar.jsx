import React from 'react';
import { Link } from 'react-router-dom';

import LinkIndex from './link-index';

const image_name = [
    "dashboard",
    "favorites"
];

class NavBar extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="navbar">
                <LinkIndex image_name={image_name} />
            </div>
        );
    }
}

export default NavBar;