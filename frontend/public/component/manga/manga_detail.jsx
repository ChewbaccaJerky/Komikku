import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Image from '../basic/image';
import ChapterPickerContainer from './chapter_picker_container';
import BackButton from "../basic/back_button";

class MangaDetail extends React.Component {
    constructor({manga, fetchManga, setCurrentManga, alias }){
        super();
        this.state = { manga, fetchManga, setCurrentManga, alias };
    }

    componentWillMount(){
        if(this.props.manga) {
            this.state.fetchManga(this.props.manga.id);
            this.state.setCurrentManga(this.state.alias);
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
                <ChapterPickerContainer button={true}/>
            </div>
        );
    }
}

export default MangaDetail;