import React from 'react';
import { Redirect } from 'react-router-dom';

import Image from '../basic/image';


class MangaDetail extends React.Component {
    constructor({manga, fetchManga }){
        super();
        this.state = { manga, fetchManga };

    }

    componentWillMount(){
        if(this.props.manga) {
            this.state.fetchManga(this.props.manga.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({manga: nextProps.manga});
    }

    render() {
        
        if(!this.state.manga) return <Redirect to="/home" />;
        const manga = this.state.manga;
        let categories = manga.categories ? manga.categories : [];
        categories = categories.map((cat) => (
            <h1 key={cat} >{cat}</h1>
        ));
        return (
            <div className="manga-detail">
                <Image imageId={manga.image} title={manga.title} />
                <h1 className="title" > {manga.title}</h1>
                <h4 className="artist" >{manga.artist}</h4>
                <p className="description" >{manga.description}</p>
                <div className="categories">
                    { categories }
                </div>
                <div className="chapters">
                    { manga.chapters_len === 0 ? "" : manga.chapters_len }
                </div>
            </div>
        );
    }
}

export default MangaDetail;