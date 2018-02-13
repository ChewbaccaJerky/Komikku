import React from 'react';

const Image = ({imageId, title}) => (
    <img className="image" 
        src={"https://cdn.mangaeden.com/mangasimg/" + imageId }
        alt={title} />
);

export default Image;