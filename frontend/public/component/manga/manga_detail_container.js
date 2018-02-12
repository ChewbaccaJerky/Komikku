import {connect} from 'react-redux';

import { fetchManga, fetchAllMangas } from '../../action/manga_action'; 
import MangaDetail from './manga_detail';

const mapStateToProps = (state, ownProps) => {
    let alias = ownProps.match.params.alias;
    let manga = state.entities.mangas ? state.entities.mangas[alias] : null;
    return {
        manga: manga
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchManga: (id) => dispatch(fetchManga(id)),
        fetchAllMangas: () => dispatch(fetchAllMangas())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaDetail);