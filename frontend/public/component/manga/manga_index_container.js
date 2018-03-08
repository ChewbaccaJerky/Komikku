import { connect } from 'react-redux';

import { fetchMangasByPage, fetchAllMangas } from '../../action/manga_action';
import { changePage, clearUtil } from '../../action/util_action';

import MangaIndex from './manga_index';

const mapStateToProps = (state, ownProps) => {
    return {
        mangas: state.entities.mangas,
        page: state.util.page
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMangasByPage: (page) => dispatch(fetchMangasByPage(page)),
    fetchAllMangas: () => dispatch(fetchAllMangas()),
    changePage: (pageNum) => dispatch(changePage(pageNum)),
    clearUtil: () => dispatch(clearUtil()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaIndex);