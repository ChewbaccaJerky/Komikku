import $ from "jquery";

export const fetchChapterImages = (chapter_id) => (
    $.ajax({
        method: "GET",
        url: "http://komikku-api.herokuapp.com/api/chapters/" + chapter_id
    })
);
