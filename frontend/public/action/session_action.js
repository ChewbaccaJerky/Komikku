import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = (user) => dispatch => (
    SessionApiUtil.postUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => dispatch(receiveErrors(err)))
);

export const login = (user) => dispatch => (
    SessionApiUtil.postSession(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
    SessionApiUtil.destroySession().then(user => (
        dispatch(receiveCurrentUser(null))
    ), err => dispatch(receiveErrors(err)))
);