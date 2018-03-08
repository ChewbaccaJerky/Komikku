import React from "react";
import { Redirect, Link } from "react-router-dom";
import { merge } from "lodash";

import Image from "../basic/image";
import ChapterPickerContainer from "../manga/chapter_picker_container";

class Reader extends React.Component {
    constructor({manga, pages, currentChapter, fetchPages}) {
        super();
        this.state = {manga, pages: [], currentChapter, fetchPages, currentPage: 0};

        this.changePage = this.changePage.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        const { currentChapter, fetchPages } = this.state;
        if(currentChapter !== "") {
            fetchPages(currentChapter);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { manga, currentChapter, fetchPages, pages } = this.state;
        if( currentChapter !== nextProps.currentChapter ) fetchPages(nextProps.currentChapter);

        if( manga !== nextProps.manga || currentChapter !== nextProps.currentChapter || pages !== nextProps.pages) {
            if(currentChapter !== nextProps.currentChapter) fetchPages(nextProps.currentChapter);

            this.setState({
                manga: nextProps.manga,
                currentChapter: nextProps.currentChapter,
                pages: nextProps.pages,
                currentPage: 0
            });
        }
    }

    changePage(field) {
        const page = this.state.currentPage;

        switch(field){
            case "next":
                if(page + 1 < this.state.pages.length) {
                    window.document.getElementsByClassName("image-container")[0].scrollTop = 0;
                    this.setState({currentPage: page + 1});
                }

                break;

            case "prev":
                if(this.state.currentPage - 1 >= 0) {
                    window.document.getElementsByClassName("image-container")[0].scrollTop = 0;
                    this.setState({currentPage: page - 1});
                }
                break;

            default:
        }
    }

    render(){
        const { manga, pages, currentPage } = this.state;
        let image = pages.length !== 0 ? (<Image imageId={pages[currentPage].image_url} />) : "";
        window.addEventListener('keypress', (evt)=>{ console.log(evt);});
        return manga ? (<div className="reader">
            { image }
            <div className="nav-buttons">
                <button className="next" onClick={() => this.changePage("next")}>Next</button>
                <button className="prev" onClick={() => this.changePage("prev")}>Back</button>
            </div>
            <ChapterPickerContainer button={false}/>
            <h1 className="page-num">{ currentPage + 1} / { pages.length }</h1>
            <Link to={"/manga/" + manga.alias}>Return to description</Link>
        </div>) : (<Redirect to="/home" />);
    }
}

export default Reader;