import React from "react";
import { Redirect } from "react-router-dom";

import Image from "../basic/image";

class Reader extends React.Component {
    constructor({manga, chapterNum, chapters, fetchChapter}){
        super();
        
        this.state = { manga, chapterNum, chapters, fetchChapter, currentPage: 0 };
    }

    componentWillMount() {
        const { manga, chapterNum, fetchChapter } = this.state;
        this.setState({currentPage: 0});
        if(manga) {
            const chapters = manga.chapters.filter(chap => {
                if(chap[0] == chapterNum) return chap;
            })[0];
            if(chapters[3]) fetchChapter(chapters[3]);
        }
    }

    // make sure all values in state are changed
    componentWillReceiveProps(nextProps) {
        const { currentChapter, chapters, manga } = this.state;
        if( (currentChapter !== nextProps.currentChapter) || ( chapters.length !== nextProps.chapters.length)) {
            this.setState({currentChapter: nextProps.currentChapter, chapters: nextProps.chapters});
        }

        console.log(manga === nextProps.manga);
    }

    render(){
        const { manga, chapters, currentPage } = this.state;
        const page = chapters[currentPage];
        return manga ? (
            <div className="reader">
                { page === undefined ? "" : (<Image imageId={page.image_url} />)}
            </div>
        ) : ( <Redirect to="/home" />);
    }
}

export default Reader;