import {connect} from "react-redux";

import ChapterPicker from "./chapter_picker";
import { setCurrentChapter } from "../../action/util_action";
import { fetchPages } from "../../action/chapter_action";

const mapStateToProps = (state, ownProps) => {
    const alias = state.util.current_manga;
    const chapters = state.entities.mangas[alias]
        ? state.entities.mangas[alias].chapters : [];
    return {
        alias: alias,
        chapters: chapters,
        selectedChapter: state.util.current_chapter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentChapter: chapterNum => dispatch(setCurrentChapter(chapterNum)),
        fetchPages: chapterId => dispatch(fetchPages(chapterId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPicker);