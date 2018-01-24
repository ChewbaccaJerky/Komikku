
export const postUser = (user) => (
    $.ajax({
        method: 'POST',
        url: 'http://komikku-api.herokuapp.com/api/user',
        data: user
    })
);

// export const postSession = (user) => (
//     $.ajax({
//         method: 'POST',
//         url: 'http://komikku-api.herokuapp.com/api/session',
//         data: user
//     })
// );

export const postSession = (user) => {
    // console.log(user);
    let url = "http://komikku-api.herokuapp.com/api/session";
    return fetch(url, {
        method: 'POST',
        body: user
    });
};

export const destroySession = () => (
    $.ajax({
        method: 'DELETE',
        url : 'http://komikku-api.herokuapp.com/api/session',
    })
);