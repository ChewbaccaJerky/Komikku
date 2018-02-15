import React from "react";
import { Redirect } from "react-router";

class ChapterPicker extends React.Component {
    constructor({manga, chapters = []}) {
        super();

        this.state = { 
            manga: manga,
            chapters: chapters,
            fireRedirect: false 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.chapters.length != nextProps.chapters.length) {
            this.setState({ chapters: nextProps.chapters });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render(){
        const options = this.state.chapters.map((chapter) => {
            
        });
        return (
            <div className="chapters">
               <form onSubmit={this.handleSubmit}>
                
                <button type="submit">Submit</button>
               </form>
            </div>
        );
    }
}

export default ChapterPicker;