import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="header">
                <h1 className="logo">KOMIKKU</h1>
            </div>
        );
    }
}

export default Header;