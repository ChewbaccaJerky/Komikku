import { connect } from "react-redux";

import { fetchChapter, clear } from "../../action/chapter_action";
import { setCurrentChapter } from "../../action/util_action";

import Reader from './reader';

const mapStateToProps = (state, ownProps) => {
    const { current_chapter, current_manga } = state.util;
    const manga = state.entities.mangas[current_manga];
    const pages = state.entities.chapter;
    const chapterId = manga && manga.chapters ? manga.chapters.filter(chap => {
        if(chap[0] === current_chapter) return chap[3];
    })[0][3] : "";

    return {
        manga: manga,
        currentChapter: current_chapter,
        pages: pages,
        chapterId: chapterId
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchPages: (chapterId) => dispatch(fetchChapter(chapterId)),
        setCurrentChapter: (chapterNum) => dispatch(setCurrentChapter(chapterNum))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);

