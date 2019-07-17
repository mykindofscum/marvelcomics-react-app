import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    let results = '';
    if (props.result.results) {
        results = props.result.results.map((result) => (
            <div className="comic">
                <div className="comic-thumbnail-container">
                    <img className="comic-thumbnail zoom zoom:hover" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt="thumbnails" />
                </div>
                <div className="comic-details">
                    <h6>{result.title}</h6>
                    <p className="description">Description: {result.description}</p>
                    <p>Issue: {result.issueNumber}</p>
                    <p>Pages: {result.pageCount}</p>
                    <p>Price: ${result.prices[0].price}</p>
                    <button onClick={(e) => props.handleAddComic(e, result)}>ADD</button>
                </div>
            </div>        
        ))
    }
    return (
            <div>
                <section>
                    { results }
                </section>
            </div>
        )
    }
            
export default SearchResults;
                    


                    

// , issueNumber, pageCount, dates, prices

