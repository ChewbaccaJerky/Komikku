import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class ChapterPicker extends React.Component {
    constructor({alias, chapters = [], selectedChapter, setCurrentChapter, fetchPages, currentChapter, button}) {
        super();
        
        this.state = { 
            alias,
            chapters,
            selectedChapter,
            setCurrentChapter,
            fireRedirect: false,
            currentChapter,
            button: button
        };
        console.log(button);
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

        if(this.state.currentChapter !== nextProps.currentChapter) {
            this.setState({
                currentChapter: nextProps.currentChapter
            });
        }

        if(this.state.button !== nextProps.button) {
            this.setState({
                button: nextProps.button
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

    getOptions() {
        const {fireRedirect, selectedChapter, alias, currentChapter, button} = this.state;
        let options = [];
        options.push((<option key="default" value="DEFAULT" selected="selected" disabled="disabled"> PICK A CHAPTER</option>));

        const chapters = this.state.chapters.map((chapter, idx) => {

                return (<option 
                    key={chapter} 
                    value={chapter[3]} 
                    selected={ chapter[3] === currentChapter ? "selected" : ""} >
                        {alias + " " + (chapter[0] + 1)} 
                    </option>);
        });

        options = options.concat(chapters);

        if(options.length === 1 ) {
            return (
                ""
            );
        }

        return options;
    }

    render(){
        const {fireRedirect, selectedChapter, alias, currentChapter, button} = this.state;
        const options = this.getOptions();

        
        return fireRedirect ? (<Redirect to="/reader" />) : (
            <div className="chapter-picker">
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                            { options }
                    </select>
                    { (currentChapter !== 0 && button ) ? <button>READ</button> : ""}
                </form>
            </div>
        );
    }
}

export default ChapterPicker;