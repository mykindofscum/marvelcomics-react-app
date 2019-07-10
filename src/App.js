import React, { Component } from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";

const comic = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2019 MARVEL",
  "attributionText": "Data provided by Marvel. © 2019 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
  "etag": "1123d277c0b566621aa99eb3379032b590210561",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 409,
    "count": 20,
    "results": [
      {
        "id": 49248,
        "digitalId": 34645,
        "title": "Wolverine (2014) #12",
        "issueNumber": 12,
        "variantDescription": "",
        "description": "ONE MONTH TO DIE! A DOUBLE-SIZED SERIES FINALE!\n- Looks like Sabretooth is ready for his final showdown with Logan and he sure picked a meaningful venue.\n- Didn't we just see a fight in a shopping mall that seriously scarred Logan?\n- Oh, right. That whole \"messing with Wolverine\" thing.",
        "modified": "2014-09-09T12:19:43-0400",
        "isbn": "",
        "upc": "759606080091001211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 64,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "ONE MONTH TO DIE! A DOUBLE-SIZED SERIES FINALE!\n- Looks like Sabretooth is ready for his final showdown with Logan and he sure picked a meaningful venue.\n- Didn't we just see a fight in a shopping mall that seriously scarred Logan?\n- Oh, right. That whole \"messing with Wolverine\" thing."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49248",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49248/wolverine_2014_12?utm_campaign=apiRef&utm_source=dfc71f0f927d9dbcdb5e595c3026f268"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-12/digital-comic/34645?utm_campaign=apiRef&utm_source=dfc71f0f927d9dbcdb5e595c3026f268"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=34645&utm_campaign=apiRef&utm_source=dfc71f0f927d9dbcdb5e595c3026f268"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/34645?utm_campaign=apiRef&utm_source=dfc71f0f927d9dbcdb5e595c3026f268"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-08-27T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-08-04T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2015-02-23T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-08-27T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 5.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 5.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/53fb87c9a2d75",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/53fb87c9a2d75",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9484",
              "name": "Steve Mcniven",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11976",
              "name": "Peter M. Woods",
              "role": "artist"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110581",
              "name": "cover from Wolverine (2014) #12",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110582",
              "name": "story from Wolverine (2014) #12",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
};

class App extends Component {
  render() {
    const {thumbnail} = comic.data.results[0];
    return (
      <div className="App">
        <h1>{comic.data.results[0].title}</h1>
        <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} />      
      </div>
    );
  }
}

export default App;
