export const RECEIVE_PAGE = "RECEIVE_PAGE";
export const SET_CURRENT_CHAPTER = "SET_CURRENT_CHAPTER";
export const SET_CURRENT_MANGA = "SET_CURRENT_MANGA";
export const CLEAR = "CLEAR";
export const INCREMENT_CHAPTER = "INCREMENT_CHAPTER";
export const DECREMENT_CHAPTER = "DECREMENT_CHAPTER";

const changeCurrentManga = (manga) => ({
    type: SET_CURRENT_MANGA,
    current_manga: manga
});

const changeCurrentChapter = (chapterNum) => ({
    type: SET_CURRENT_CHAPTER,
    current_chapter: chapterNum
});

const receivePage = (page) => ({
    type: RECEIVE_PAGE,
    page: page
});

export const changePage = (page) => dispatch => {
    dispatch(receivePage(page));
};

export const setCurrentManga = (mangaAlias) => dispatch => {
    dispatch(changeCurrentManga(mangaAlias));
};

export const setCurrentChapter = (chapterNum) => dispatch => {
    dispatch(changeCurrentChapter(chapterNum));
};