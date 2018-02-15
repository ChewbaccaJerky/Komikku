import React from 'react';
import { Redirect } from 'react-router-dom';

import Image from '../basic/image';
import ChapterPicker from './chapter_picker';

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
            <p className="category" key={cat}>{cat}</p>
        ));
        return (
            <div className="manga-detail">
                <Image imageId={manga.image} title={manga.title} />
                <h1 className="title" > {manga.title}</h1>
                <h4 className="artist" ><span>By:</span> {manga.artist}</h4>
                <p className="description" ><span>Description:</span> {manga.description}</p>
                <div className="categories">
                    <span>Categories:</span> { categories }
                </div>
                <ChapterPicker manga={manga.title} chapters={manga.chapters} />
            </div>
        );
    }
}

export default MangaDetail;