import React from "react";

import Image from "../basic/image";

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
            })[0];
        }

        return(
            <div className="reader">
                { chapter != [] ? <Image imageId={chapter[3]} title={chapter[2]} /> : ""}
            </div>
        );
    }
}

export default Reader;