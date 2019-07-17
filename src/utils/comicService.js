import tokenService from "./tokenService";


const BASE_URL = '/api/collections';

export default {
    addComic,
    getCollection
};

function addComic(newComic) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(newComic)
    }).then(res => {
      if (res.ok) return res;  
    })
}

function getCollection() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
}