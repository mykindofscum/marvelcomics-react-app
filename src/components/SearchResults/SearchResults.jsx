import React from 'react';
// import { Link } from 'react-router.dom';
import './SearchResults.css';

const SearchResults = (props) => {
    // const comicData = this.props.result.results
    // const {thumbnail, issueNumber, pageCount, dates, prices} = comicData;
    let results = '';
    console.log(props.result.results);
    if (props.result.results) {
        results = props.result.results.map((result) => (
        <div>
            <p>title: {result.title}</p>
            {/* <p> {result.thumbnail} </p> */}
        </div>

    ))
}
    console.log(results);
        return (
            <div>
                something
                {results}
            </div>
        )
    }
export default SearchResults;

