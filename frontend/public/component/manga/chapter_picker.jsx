import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class ChapterPicker extends React.Component {
    constructor({alias, chapters = [], selectedChapter, setCurrentChapter, fetchPages}) {
        super();

        this.state = { 
            alias,
            chapters,
            selectedChapter,
            setCurrentChapter,
            fireRedirect: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.chapters.length !== 0) {
            this.setState((state, props) => {
                return {
                    chapters: props.chapters,
                    selectedChapter: props.selectedChapter
                };
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ fireRedirect: true });
    }

    handleChange(e) {
        e.preventDefault();
        const chapter = e.currentTarget.value;
        this.setState({selectedChapter: chapter});
        this.state.setCurrentChapter(chapter);
    }

    render(){
        const {fireRedirect, selectedChapter, alias} = this.state;

        const options = this.state.chapters.map((chapter) => {
            return (<option key={chapter} value={chapter[3]}>{alias + " " + chapter[0]}</option>);
        });
    
        options.push((<option key="default" value="" selected="selected" disabled="disabled"> PICK A CHAPTER</option>));

        if(options.length === 1 ) {
            return (
                ""
            );
        }
        
        return fireRedirect ? (<Redirect to="/reader" />) : (
            <div className="chapter-picker">
                <form onSubmit={this.handleChange}>
                    <select onChange={this.handleChange}>
                            { options }
                    </select>
                    <button>READ</button>
                </form>
            </div>
        );
    }
}

export default ChapterPicker;