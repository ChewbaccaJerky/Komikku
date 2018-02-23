import * as ChapterAPIUtil from "../util/chapter_api_util";

export const RECEIVE_CHAPTER = "RECEIVE_CHAPTER";
export const RECEIVE_CHAPTER_ERRORS = "RECEIVE_CHAPTER_ERRORS";
export const CLEAR_CHAPTER = "CLEAR_CHAPTER";

export const  receivePages = pages => ({
    type: RECEIVE_CHAPTER,
    chapter: pages.chapter
});

export const clearChapters = chapter => ({
    type: CLEAR_CHAPTER
});

const receiveErrors = errors => ({
    type: RECEIVE_CHAPTER_ERRORS,
    errors
});

export const fetchPages = chapterId => dispatch => (
    ChapterAPIUtil.fetchChapterImages(chapterId).then(pages => (
        dispatch(receivePages(pages))
    ), err => dispatch(receiveErrors(err)))
);

export const clear = () => dispatch => {
    return dispatch(clearChapters());
};