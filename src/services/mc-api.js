const crypto = require('crypto');
const marvelURL = 'https://gateway.marvel.com:443/v1/public/comics?'
const apiKey = `${process.env.REACT_APP_PUBLIC_API_KEY}`;
const privateKey = `privatekey${process.env.REACT_APP_PRIVATE_API_KEY}`;

// const url = `${marvelUrl}${query}${auth}`;
// const query = `?limit=${req.query.limit}&titleStartsWith=${req.query.title}`;

const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(`${ts}${privateKey}${apiKey}`).digest('hex');
console.log(privateKey);
console.log(hash);

export function getComics(query) {
  return fetch(`${marvelURL}titleStartsWith=${query}&apikey=${apiKey}`, {mode: "cors"})
  .then(res => res.json());
}
