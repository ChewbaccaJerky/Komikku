import $ from "jquery";

export const postUser = (user) => (
    $.ajax({
        method: 'POST',
        url: 'http://komikku-api.herokuapp.com/api/user',
        data: user
    })
);

export const postSession = (user) => (
    $.ajax({
        method: 'POST',
        url: 'http://komikku-api.herokuapp.com/api/session',
        data: user
    })
);

export const destroySession = () => (
    $.ajax({
        method: 'DELETE',
        url : 'http://komikku-api.herokuapp.com/api/session',
    })
);