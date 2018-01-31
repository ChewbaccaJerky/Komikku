import { connect } from 'react-redux';

import { login, logout, signup } from '../../action/session_action';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn : Boolean(state.entities.session.currentUser)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // login: user => dispatch(login(user))
    };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (SessionForm);
