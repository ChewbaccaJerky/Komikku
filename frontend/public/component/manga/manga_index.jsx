import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MangaItem from './manga_item';

class MangaIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {mangas: props.mangas, page: props.page };
    }

    componentWillMount(){
        this.props.fetchMangasByPage(this.props.page);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.mangas !== nextProps.mangas) {
            this.setState({mangas: nextProps.mangas });
        }
    }

    render(){

        let mangaItems = [];

        if(this.state.mangas) {

            Object.keys(this.state.mangas).forEach((title)=>{
                
                mangaItems.push((
                        <MangaItem manga={this.state.mangas[title]} key={title} />
                ));
            });
        }

        return(
            <ReactCSSTransitionGroup
                        className="manga-index"
                        transitionName="manga-item"
                        transitionEnterTimeout={500}
                        transitoinLeaveTimeout={500}>
                { mangaItems }
            </ReactCSSTransitionGroup>
        );
    }
}

export default MangaIndex;