import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MangaItem from './manga_item';

class MangaIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {mangas: props.mangas, page: this.props.page };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        this.props.fetchMangasByPage(this.props.page);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.mangas !== nextProps.mangas) {
            this.setState({mangas: nextProps.mangas });
        }

        if(this.state.page !== nextProps.page) this.setState({page: nextProps.page});
    }

    handleClick(){
        this.props.changePage(this.state.page + 1);
        this.props.fetchMangasByPage(this.state.page + 1);
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
                        transitionEnter={false}
                        transitionLeave={false}
                        transitionAppear={true}
                        transitionAppearTimeout={500}>
                { mangaItems }
                <button onClick={this.handleClick}>NEXT</button>
            </ReactCSSTransitionGroup>
        );
    }
}

export default MangaIndex;