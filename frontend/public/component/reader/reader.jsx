import React from "react";
import FontAwesome from "react-fontawesome";
import { Redirect } from "react-router-dom";
import { merge } from "lodash";

import Image from "../basic/image";
import ChapterPickerContainer from "../manga/chapter_picker_container";

// class Reader extends React.Component {
//     constructor({manga, currentChapter, chapters, fetchChapter, clear }){
//         super();
        
//         this.state = { manga, currentChapter, chapters: [], fetchChapter, clear, currentPage: 0, nextChapter: false };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     getChapters() {
//         const { manga, currentChapter, fetchChapter } = this.state;
//         this.setState({currentPage: 0});
//         if(manga) {
//             const chapters = manga.chapters.filter(chap => {
//                 if(chap[0] == currentChapter) return chap;
//             })[0];
//             if(chapters) fetchChapter(chapters[3]);
//         }
//     }

//     componentWillMount() {
//         this.getChapters();
//     }

//     componentWillReceiveProps(nextProps) {
//         if(this.state.chapters.length !== nextProps.chapters.length) {
//             this.setState({
//                 chapters: nextProps.chapters
//             });
//         }

//         if(this.state.currentChapter !== nextProps.currentChapter ) {
//             this.setState({
//                 currentChapter: nextProps.currentChapter
//             });
//             this.getChapters();
//         }
//     }

//     handleClick(field){
//         this.setState(state => {
//             let pageNum = state.currentPage;
//             switch(field) {
//                 case "next":
//                     pageNum++;
//                     break;
//                 case "prev":
//                     if(pageNum !== 0)
//                         pageNum--;
//                     break;

//                 default:
//             }

//             if( pageNum > state.chapters.length-1) {
//                 let chap = state.currentChapter;
                
//                 if(parseInt(chap) + 1 < state.manga.chapters.length) {
//                     chap = parseInt(chap) + 1;
//                     return {
//                         currentChapter: chap,
//                         currentPage: 0
//                     };
//                 }
//             } 
//             else {
//                 return {
//                     currentPage: pageNum
//                 };
//             }
//         });
//     }

//     render(){
//         const { manga, chapters, currentPage, nextChapter, currentChapter } = this.state;
//         const page = chapters[currentPage];
//         return manga ? (
//             <div className="reader">
//                 { page === undefined ? "" : (<Image imageId={page.image_url} />)}
//                 <h1 className="page-num">{(currentPage + 1)}</h1>
//                 <button onClick={()=> this.handleClick("next")} className="next">NEXT</button>
//                 <button onClick={()=> this.handleClick("prev")} className="prev">PREV</button>
//                 <ChapterPickerContainer />
//             </div>
//         ) : ( <Redirect to="/home" />);
//     }
// }

class Reader extends React.Component {
    constructor({manga, currentChapter, pages, chapterId, fetchPages, setCurrentChapter}) {
        super();
        this.state = {
            manga,
            currentChapter,
            pages,
            chapterId,
            fetchPages,
            setCurrentChapter
        };
    }

    componentDidMount() {
        const {fetchPages, chapterId} = this.state;
        if(chapterId !== "") fetchPages(chapterId);
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render(){
        
        return (
            <div className="reader">
                
            </div>
        );
    }
}

export default Reader;