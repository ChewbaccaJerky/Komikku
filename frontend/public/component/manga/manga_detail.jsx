import React from 'react';
import { Redirect } from 'react-router-dom';

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
        if (Object.keys(this.state.manga).length != Object.keys(nextProps.manga).length) {
            this.setState({manga: nextProps.manga});
        }
    }

    render() {
        
        if(!this.state.manga) return <Redirect to="/home" />;
        const manga = this.state.manga;
        return (
            <div className="manga-detail">
                <img src={"https://cdn.mangaeden.com/mangasimg/" + manga.image} alt="image" />
                <h1>{manga.title}</h1>
                <h4>{manga.artist}</h4>
                <p>{manga.description}</p>
                <div className="chapters">
                    { manga.chapter_len }
                </div>
            </div>
        );
    }
}

export default MangaDetail;