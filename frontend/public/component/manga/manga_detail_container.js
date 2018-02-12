import {connect} from 'react-redux';

import { fetchManga } from '../../action/manga_action'; 
import MangaDetail from './manga_detail';

const mapStateToProps = (state, ownProps) => {
    let alias = ownProps.match.params.alias;
    let manga = state.entities.mangas.mangas[alias];
    console.log(alias);
    console.log(manga);
    return {
        prop: state.prop
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchManga: (id) => dispatch(fetchManga(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangaDetail);