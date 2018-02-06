import { connect } from 'react-redux';

import { fetchMangasByPage } from '../../action/manga_action';
import MangaIndex from './manga_index';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    let page = state.entities.mangas.page ? page : 0;
    return {
        mangas: state.entities.mangas,
        page: page
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMangasByPage: (page) => dispatch(fetchMangasByPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaIndex);