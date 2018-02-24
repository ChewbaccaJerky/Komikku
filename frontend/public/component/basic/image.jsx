import React from 'react';

const Image = ({imageId, title}) => (
    <div className="image-container">
        <img
            src={"https://cdn.mangaeden.com/mangasimg/" + imageId }
            alt={title} />
    </div>
);

export default Image;