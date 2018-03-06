import $ from "jquery";

export const fetchAllMangas = () => (
    $.ajax({
        method: 'GET',
        url: 'http://komikku-api.herokuapp.com/api/mangas'
    })
);

// export const fetchAllMangas = () => (
//     $.ajax({
//         method: 'GET',
//         url: 'http://localhost:3000/api/mangas'
//     })
// );


export const fetchMangasByPage = (pageNum) => (
    $.ajax({
        method: 'GET',
        url: 'http://komikku-api.herokuapp.com/api/page/' + pageNum
    })
);

export const fetchManga = (id) => (
    $.ajax({
        method: 'GET',
        url: 'http://komikku-api.herokuapp.com/api/mangas/' + id
    })
);