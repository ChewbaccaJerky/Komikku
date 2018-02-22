import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class ChapterPicker extends React.Component {
    constructor({alias, chapters = [], selectedChapter, setCurrentChapter}) {
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
                    selectedChapter: props.chapters[0][0]
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
        console.dir(this.state);
        const chapter = parseInt(e.currentTarget.value);
        this.setState({selectedChapter: chapter});
        this.state.setCurrentChapter(chapter);
    }

    render(){
        const {fireRedirect, selectedChapter, alias} = this.state;
        const options = this.state.chapters.map((chapter) => {
            return (<option key={chapter[0]} value={chapter[0]}>{alias + " " + chapter[0]}</option>);
        });

        if(options.length === 0 ) {
            return (
                ""
            );

        }
        
        return fireRedirect ? (<Redirect to="/reader" />) : (
            <div className="chapter-picker">
               <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        { options }
                    </select>
                <button type="submit">READ</button>
               </form>
            </div>
        );
    }
}

export default ChapterPicker;