import { connect } from "react-redux";

import { fetchPages, clear } from "../../action/chapter_action";
import { setCurrentChapter } from "../../action/util_action";

import Reader from './reader';

const mapStateToProps = (state, ownProps) => {
    const mangaName = state.util.current_manga;
    const manga = state.entities.mangas[mangaName];
    const pages = state.entities.chapter;
    const currentChapter = state.util.current_chapter;
    return {
        manga: manga,
        pages: pages,
        currentChapter: currentChapter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchPages: (chapterId) => dispatch(fetchPages(chapterId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);

