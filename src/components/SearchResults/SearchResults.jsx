import React from 'react';
// import { Link } from 'react-router.dom';
import './SearchResults.css';

const SearchResults = (props) => {
    // const comicData = props.result.results;
    // const {thumbnail} = comicData;
    let results = '';
    console.log(props.result.results);
    if (props.result.results) {
        results = props.result.results.map((result) => (
            <div className="comic">
                <div className="comic-thumbnail-container">
                    <img className="comic-thumbnail" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt="thumbnails" />
                </div>
                <div className="comic-details">
                        <h2>Title: {result.title}</h2>
                        <p>Description:</p>
                        <p>Issue: {result.issueNumber}</p>
                        <p>Pages: {result.pageCount}</p>
                        <p>Date: {result.date}</p>
                        <p>Price: ${result.prices[0].price}</p>
                </div>
            </div>
    ))
}
    console.log(results);
        return (
            <div>
                <section>
                    {results}
                </section>
            </div>
        )
    }
export default SearchResults;
                    
                    

// , issueNumber, pageCount, dates, prices

