import { connect } from "react-redux";

import { fetchChapter } from "../../action/chapter_action";
import Reader from './reader';

const mapStateToProps = (state, ownProps) => {
    const { alias, chapter } = ownProps.match.params;
    const manga = state.entities.mangas[alias];
    let chapters = [];
    const chapterImages = state.entities.chapter;
   
    if(manga) {
        chapters = manga.chapters;
    }

    return {
        manga: manga,
        currentChapter: chapter,
        chapters: chapters,
        chapterImages: chapterImages
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchChapter: (chapterId) => dispatch(fetchChapter(chapterId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);

