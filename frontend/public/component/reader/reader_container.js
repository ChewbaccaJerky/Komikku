import { connect } from "react-redux";

import Reader from './reader';

const mapStateToProps = (state, ownProps) => {
    const { alias, chapter } = ownProps.match.params;
    const manga = state.entities.mangas[alias];
    
    return {
        manga: manga,
        currentChapter: chapter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);

