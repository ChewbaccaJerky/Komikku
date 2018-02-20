import React from "react";
import FontAwesome from "react-fontawesome";
import { Redirect } from "react-router-dom";
import { merge } from "lodash";

import Image from "../basic/image";

class Reader extends React.Component {
    constructor({manga, chapterNum, chapters, fetchChapter, clear}){
        super();
        
        this.state = { manga, chapterNum, chapters, fetchChapter, clear, currentPage: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    getChapters() {
        const { manga, chapterNum, fetchChapter } = this.state;
        this.setState({currentPage: 0});
        if(manga) {
            const chapters = manga.chapters.filter(chap => {
                if(chap[0] == chapterNum) return chap;
            })[0];
            if(chapters) fetchChapter(chapters[3]);
        }
    }

    componentWillMount() {
        this.getChapters();
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

    handleClick(field){
        this.setState(state => {
            let pageNum = state.currentPage;
            switch(field) {
                case "next":
                    pageNum++;
                    break;
                case "prev":
                    if(pageNum !== 0)
                        pageNum--;
                    break;

                default:
            }
            console.log(state);
            if( pageNum > state.chapters.length-1) {
                return {
                    currentPage: 0,
                    currentChapter: state.currentChapter + 1
                };
            } 
            else {
                return {
                    currentPage: pageNum
                };
            }
        });
    }

    render(){
        const { manga, chapters, currentPage } = this.state;
        const page = chapters[currentPage];
        return manga ? (
            <div className="reader">
                { page === undefined ? "" : (<Image imageId={page.image_url} />)}
                <h1 className="page-num">{(currentPage + 1)}</h1>
                <button onClick={()=> this.handleClick("next")} className="next">NEXT</button>
                <button onClick={()=> this.handleClick("prev")} className="prev">PREV</button>
            </div>
        ) : ( <Redirect to="/home" />);
    }
}

export default Reader;