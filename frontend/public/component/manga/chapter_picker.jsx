import React from "react";
import { Redirect } from "react-router";

class ChapterPicker extends React.Component {
    constructor({manga, chapters = []}) {
        super();

        this.state = { 
            manga: manga,
            chapters: chapters,
            selectedChapter: null,
            fireRedirect: false 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.chapters.length != nextProps.chapters.length) {
            this.setState({ chapters: nextProps.chapters, selectedChapter: nextProps.chapters[0][0] });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ fireRedirect: true });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({selectedChapter: e.currentTarget});
    }

    render(){
        const {fireRedirect, selectedChapter, manga} = this.state;
        const options = this.state.chapters.map((chapter) => {
            return (<option key={chapter[0]} value={chapter[0]}>{chapter[0]}</option>);
        });
        console.log(selectedChapter);
        return fireRedirect ? (<Redirect to={ "/manga/" + manga.alias + "/" + selectedChapter } />) : (
            <div className="chapters">
               <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        { options }
                    </select>
                <button type="submit">Submit</button>
               </form>
            </div>
        );
    }
}

export default ChapterPicker;