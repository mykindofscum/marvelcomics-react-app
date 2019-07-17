// const crypto = require('crypto');
const marvelURL = 'https://gateway.marvel.com:443/v1/public/comics?'
const apiKey = `${process.env.REACT_APP_PUBLIC_API_KEY}`;
// const privateKey = `privatekey${process.env.REACT_APP_PRIVATE_API_KEY}`;

export function getComics(query) {
  return fetch(`${marvelURL}titleStartsWith=${query}&apikey=${apiKey}`, {mode: "cors"})
  .then(res => res.json());
}
