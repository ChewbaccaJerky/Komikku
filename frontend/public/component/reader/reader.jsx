import React from "react";
import { Redirect } from "react-router-dom";

import Image from "../basic/image";

class Reader extends React.Component {
    constructor({ manga, chapters, chapterImages, currentChapter, fetchChapter }){
        super();
        this.state = { manga, chapters, currentChapter, fetchChapter, currentPage: 0 };
    }

    componentWillMount() {
        const { chapters, currentChapter, fetchChapter } = this.state;
        const chapter = chapters.filter(chap => {
            if(chap[0] == currentChapter) return chap;
        })[0];
        
        if(chapter) {
            fetchChapter(chapter[3]);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.currentChapter !== nextProps.currentChapter) {
            this.setState({currentChapter: nextProps.currentChapter });
        }
    }

    render(){
        const { manga, currentChapter, currentPage, chapterImages } = this.state;

        return manga ? (
            <div className="reader">
                
            </div>
        ) : ( <Redirect to="/home" />);
    }
}

export default Reader;