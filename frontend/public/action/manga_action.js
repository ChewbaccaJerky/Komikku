import * as MangaAPIUtil from '../util/manga_api_util';

export const RECEIVE_MANGAS = "RECEIVE_MANGAS";
export const RECEIVE_MANGA = "RECEIVE_MANGA";
export const RECEIVE_MANGA_ERRORS = "RECEIVE_MANGA_ERRORS";

const receiveMangas = mangas => ({
    type: RECEIVE_MANGAS,
    mangas: mangas.mangas
});

const receiveManga = manga => ({
    type: RECEIVE_MANGA,
    manga: manga
});

const receiveErrors = errors => ({
    type: RECEIVE_MANGA_ERRORS,
    errors
});

export const fetchAllMangas = () => dispatch => (
    MangaAPIUtil.fetchAllMangas().then(payload => (
        dispatch(receiveMangas(payload))
    ), err => dispatch(receiveErrors(err)))
);

export const fetchMangasByPage = (pageNum) => dispatch => (
    MangaAPIUtil.fetchMangasByPage(pageNum).then(payload => (
        dispatch(receiveMangas(payload))
    ), err => dispatch(receiveErrors(err)))
);

export const fetchManga = (id) => dispatch => (
    MangaAPIUtil.fetchManga(id).then(manga => (
        dispatch(receiveManga(manga))
    ), err => dispatch(receiveErrors(err)))
);

