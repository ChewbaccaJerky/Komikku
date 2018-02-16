import React from "react";

class Reader extends React.Component {
    constructor({manga, currentChapter}){
        super();
        this.state = { manga, currentChapter };
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.currentChapter !== nextProps.currentChapter) {
            this.setState({currentChapter: nextProps.currentChapter });
        }
    }

    render(){
        console.dir(this.state);

        return(
            <div className="reader">
                READER!
            </div>
        );
    }
}

export default Reader;