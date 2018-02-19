import * as ChapterAPIUtil from "../util/chapter_api_util";

export const RECEIVE_CHAPTER = "RECEIVE_CHAPTER";
export const RECEIVE_CHAPTER_ERRORS = "RECEIVE_CHAPTER_ERRORS";

export const  receiveChapter = chapter => ({
    type: RECEIVE_CHAPTER,
    chapter: chapter.chapter
});

const receiveErrors = errors => ({
    type: RECEIVE_CHAPTER_ERRORS,
    errors
});

export const fetchChapter = chapterId => dispatch => (
    ChapterAPIUtil.fetchChapterImages(chapterId).then(chapter => (
        dispatch(receiveChapter(chapter))
    ), err => dispatch(receiveErrors(err)))
);