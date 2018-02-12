export const RECEIVE_PAGE = "RECEIVE_PAGE";

const receivePage = (page) => ({
    type: RECEIVE_PAGE,
    page: page
});

export const changePage = (page) => dispatch => {
    dispatch(receivePage(page));
};