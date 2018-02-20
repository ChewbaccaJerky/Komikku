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
        if(manga) {
            const chapters = manga.chapters.filter(chap => {
                if(chap[0] == chapterNum) return chap;
            })[0];
            if(chapters[3]) fetchChapter(chapters[3]);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        const { currentChapter, chapters } = this.state;
        if( (currentChapter !== nextProps.currentChapter) || ( chapters.length !== nextProps.chapters.length) )
            this.setState({currentChapter: nextProps.currentChapter, chapters: nextProps.chapters});
    }

    render(){
        const { manga } = this.state;
        return manga ? (
            <div className="reader">
                
            </div>
        ) : ( <Redirect to="/home" />);
    }
}

export default Reader;