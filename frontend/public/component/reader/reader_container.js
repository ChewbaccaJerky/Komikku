import { connect } from "react-redux";

import { fetchChapter, clear } from "../../action/chapter_action";
import Reader from './reader';

const mapStateToProps = (state, ownProps) => {
    const { alias, chapter } = ownProps.match.params;
    const manga = state.entities.mangas[alias];
    const chapters = state.entities.chapter;
    return {
        manga: manga,
        chapterNum: chapter,
        chapters: chapters
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchChapter: (chapterId) => dispatch(fetchChapter(chapterId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);

