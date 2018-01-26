import React from 'react';

const Icon = ({ image_name }) => {
    return (
        <div className="icon-container">
            
            <img className="icon" src={"./static/svg/" + image_name + ".svg"} />
        </div>
    );
};

export default Icon;