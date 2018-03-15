import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MangaItem from './manga_item';
import Icon from '../navbar/icon';
import SearchModal from "../search/search_modal";

class MangaIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {mangas: props.mangas, page: this.props.page, showModal: false, search:"" };

        this.handleClick = this.handleClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentWillMount(){
        this.props.fetchMangasByPage(this.props.page);
        this.props.clearUtil();
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

    handleOpenModal(){
        this.setState({showModal: true});
    }

    handleCloseModal(e){
        e.preventDefault();
        this.setState({showModal: false});
    }

    handleSearchChange(e){
        this.setState({search: e.target.value.toLowerCase()});
    }

    render(){

        let mangaItems = [];
        const search = this.state.search.replace(' ', '-');
        let regex = new RegExp(search);

        if(this.state.mangas) {
            Object.keys(this.state.mangas).forEach((title)=>{
                // if(search === "" || title.includes(search)) {
                if(search === "" || regex.test(title)) {
                    mangaItems.push((
                            <MangaItem manga={this.state.mangas[title]} key={title} />
                    ));
                }
            });
        }

        return(
            <ReactCSSTransitionGroup
                        className="manga-index"
                        transitionName="fade"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                <button onClick={this.handleOpenModal}><Icon image_name="search" /></button>
                { mangaItems }
                <button onClick={this.handleClick}>More Manga</button>

                <SearchModal 
                    showModal={this.state.showModal} 
                    handleCloseModal={this.handleCloseModal} 
                    handleSearchChange={this.handleSearchChange} 
                    searchParams={this.state.search}/>
            </ReactCSSTransitionGroup>
        );
    }
}



export default MangaIndex;