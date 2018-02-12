import React from 'react';
import { Redirect } from 'react-router-dom';

class MangaDetail extends React.Component {
    constructor({manga, fetchManga }){
        super();
        this.state = { manga, fetchManga };

    }

    componentWillMount(){
        if(this.state.manga) {
            this.state.fetchManga(this.state.manga.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.manga != nextProps.manga) {
            this.setState = { manga: nextProps.manga };
        }
    }

    render() {
        
        if(!this.state.manga) return <Redirect to="/home" />;
        const manga = this.state.manga;
        console.log(manga);
        return (
            <div className="manga-detail">
                { manga.title }
            </div>
        );
    }
}

export default MangaDetail;