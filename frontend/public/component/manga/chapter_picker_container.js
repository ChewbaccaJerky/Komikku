import {connect} from "react-redux";

import ChapterPicker from "./chapter_picker";
import { setCurrentChapter } from "../../action/util_action";

const mapStateToProps = (state, ownProps) => {
    const alias = state.util.current_manga;
    return {
        alias: alias,
        chapters: state.entities.mangas[alias].chapters,
        selectedChapter: state.util.current_chapter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentChapter: chapterNum => dispatch(setCurrentChapter(chapterNum))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPicker);