const BASE_URL = '/api/comics';

export default {
    addComic
};

function addComic(newComic) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            // add list of comic details
        },
        body: JSON.stringify(newComic)
    }).then(res => {
      if (res.ok) return res;  
    })
}