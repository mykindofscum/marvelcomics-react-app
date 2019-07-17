import React from 'react';
import './Collection.css';
// import comicService from '../../utils/comicService';

const Collection = (props) => {             
    let collection = [];
    if (props.collection) {
        collection = props.collection.map((collection) => (
            <div className="comic">
                <div className="comic-thumbnail-container">
                
                    {/* <img className="comic-thumbnail" 
                    src={`${collection.thumbnail.path}.${collection.thumbnail.extension}`} 
                    alt="thumbnail" /> */}
                </div>
                <div className="comic-details">
                    <h5>{collection.title}</h5>
                    <p >Description:</p>
                    <p>Issue: {props.issueNumber}</p>
                    <p>Pages: {props.pageCount}</p>
                    <p>Price: ${props.price}</p>
                </div>
            </div>        
        ))
    }

    return (
        <div className="collection">
                <h3>Collection</h3>
            <section>
                { collection }
            </section>
        </div>
    )
}
export default Collection;
        