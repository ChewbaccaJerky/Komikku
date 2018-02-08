import React from 'react';

const MangaItem = ({manga}) => {
    console.log(manga);
    const image = manga.image ? (<img src={"https://cdn.mangaeden.com/mangasimg/" + manga.image} alt={manga.title}/>) : "";
        return (
            <div className="manga-item">
                <h1>{manga.title}</h1>
                { image }
            </div>
        );
};

export default MangaItem;