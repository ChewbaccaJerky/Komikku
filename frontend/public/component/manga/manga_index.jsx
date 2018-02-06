import React from 'react';

import MangaItem from './manga_item';

class MangaIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {mangas: props.mangas.mangas, page: props.page };
    }

    componentWillMount(){
        this.props.fetchMangasByPage(this.props.page);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.mangas !== nextProps.mangas) {
            this.setState({mangas: nextProps.mangas.mangas, page: nextProps.mangas.page});
        }
    }

    render(){

        let mangaItems = [];

        if(this.state.mangas) {
            Object.keys(this.state.mangas).forEach((title)=>{
                mangaItems.push((<MangaItem manga={this.state.mangas[title]} key={title} />));
            });
        }

        return(
            <div className="manga-index">
                { mangaItems }
            </div>
        );
    }
}

export default MangaIndex;