import { connect } from "react-redux";

import { fetchChapter, clear } from "../../action/chapter_action";
import { setCurrentChapter } from "../../action/util_action";

import Reader from './reader';

const mapStateToProps = (state, ownProps) => {
    const { current_chapter, current_manga } = state.util;
    const manga = state.entities.mangas[current_manga];
    const chapters = state.entities.chapter;
    // console.dir(current_chapter);
    return {
        manga: manga,
        currentChapter: current_chapter,
        chapters: chapters
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchChapter: (chapterId) => dispatch(fetchChapter(chapterId)),
        setCurrentChapter: (chapterNum) => dispatch(setCurrentChapter(chapterNum))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);

