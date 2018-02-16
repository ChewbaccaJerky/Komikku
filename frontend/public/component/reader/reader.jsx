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
        return(
            <div className="reader">
                READER!
            </div>
        );
    }
}

export default Reader;