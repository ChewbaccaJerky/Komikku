import { connect } from 'react-redux';

import { fetchMangasByPage } from '../../action/manga_action';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => ({
    mangas: state.entities.mangas
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMangasByPage: (page) => dispatch(fetchMangasByPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);