import React from "react";

class Reader extends React.Component {
    constructor({manga, currentChapter}){
        super();
        this.state = { manga, currentChapter, currentPage: 0 };
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.currentChapter !== nextProps.currentChapter) {
            this.setState({currentChapter: nextProps.currentChapter });
        }
    }

    render(){
        const { manga, currentChapter, currentPage } = this.state;
        let chapter = [];
        if(manga) {
            chapter = manga.chapters.filter((chap) => {
                if( chap[0] == currentChapter) {
                    return chap;
                }
            });
        }
        return(
            <div className="reader">
            </div>
        );
    }
}

export default Reader;