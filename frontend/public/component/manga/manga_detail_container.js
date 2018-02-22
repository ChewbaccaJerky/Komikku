import {connect} from 'react-redux';

import { fetchManga, fetchAllMangas } from '../../action/manga_action'; 
import MangaDetail from './manga_detail';
import { setCurrentManga } from "../../action/util_action";

const mapStateToProps = (state, ownProps) => {
    let alias = ownProps.match.params.alias;
    let manga = state.entities.mangas ? state.entities.mangas[alias] : null;
    return {
        manga: manga,
        alias: alias
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchManga: (id) => dispatch(fetchManga(id)),
        fetchAllMangas: () => dispatch(fetchAllMangas()),
        setCurrentManga: (mangaAlias) => dispatch(setCurrentManga(mangaAlias))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaDetail);