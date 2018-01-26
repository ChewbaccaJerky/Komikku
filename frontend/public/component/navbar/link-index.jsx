import React from 'react';

import LinkItem from './link-item';

const LinkIndex = ( { image_name } ) => {
    let linkItems = image_name.map((name, idx) => {
        return(<LinkItem image_name={name} key={idx} />);
    });

    return(
        <div className="link-index">
            {linkItems}
        </div>
    );
};

export default LinkIndex;