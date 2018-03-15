import React from 'react';
import { Link } from 'react-router-dom';

const MangaItem = ({manga}) => {

    const image = manga.image ? (<img src={"https://cdn.mangaeden.com/mangasimg/" + manga.image} alt={manga.title}/>) : "";

        return (
            <div className="manga-item">
                <Link to={"/manga/"+manga.alias}>    
                    <h1>{manga.title}</h1>
                    { image }
                </Link>
            </div>
        );
};

export default MangaItem;