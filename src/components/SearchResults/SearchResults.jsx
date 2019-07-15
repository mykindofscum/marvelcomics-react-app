import React, { Component} from 'react';
// import { Link } from 'react-router.dom';
import './SearchResults.css';


class SearchResults extends Component {
    render() {
        const Data = this.props.comic;
        const {thumbnail, issueNumber, pageCount, dates, prices} = Data;
            return (
                <div className="result">
                    <div className="result-thumbnail-container">
                        <img className="result-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="thumbnail" />
                    </div>
                    <div className="result-data-container">
                        <h1>{Data.title}</h1>
                        <p>Issue: {issueNumber}</p>
                        <p>Pages: {pageCount}</p>
                        <p>Date: {new Date(dates[0].date.toLocaleDateString())}</p>
                        <p>Price: ${prices[0].price}</p>
                    </div>
                    {/* <Link to='/'>RETURN</Link> */}
                </div>
        )
    }
}

export default SearchResults;

// {this.props.results.map((comic, index) => <SearchResults comic={comic} key={index} />)}

