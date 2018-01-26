import React from 'react';

import Icon from './icon';

const LinkItem = ({image_name }) => (
    <div className="link-item">
        <Icon image_name={image_name} />
        <h1>{image_name.charAt(0).toUpperCase() + image_name.slice(1)}</h1>
    </div>
);

export default LinkItem;