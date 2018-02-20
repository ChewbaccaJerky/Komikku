import React from "react";
import { Redirect } from "react-router-dom";
import { merge } from "lodash";

import Image from "../basic/image";

class Reader extends React.Component {
    constructor({manga, chapterNum, chapters, fetchChapter, clear}){
        super();
        
        this.state = { manga, chapterNum, chapters, fetchChapter, clear, currentPage: 0 };
    }

    componentWillMount() {
        const { manga, chapterNum, fetchChapter } = this.state;
        this.setState({currentPage: 0});
        if(manga) {
            const chapters = manga.chapters.filter(chap => {
                if(chap[0] == chapterNum) return chap;
            })[0];
            if(chapters) fetchChapter(chapters[3]);
        }
    }

    componentWillReceiveProps() {
        this.setState((state, props) => {
            return {
                manga: props.manga,
                chapterNum: props.chapterNum,
                chapters: props.chapters    
            };
        });
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