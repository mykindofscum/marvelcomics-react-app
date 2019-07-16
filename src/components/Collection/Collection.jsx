import React from 'react';
import './Collection.css';
// import comicService from '../../utils/comicService';

const Collection = (props) => {             
    let collection = [];
    if (props.collection) {
        collection = props.collection.map((collection) => (
            <div className="comic">
                <div className="comic-thumbnail-container">
                
                    <img className="comic-thumbnail" 
                    src={`${collection.thumbnail.path}.${collection.thumbnail.extension}`} 
                    alt="thumbnail" />
                </div>
                <div className="comic-details">
                    <h5>{collection.title}</h5>
                    <p >Description:</p>
                    <p>Issue: {collection}.issueNumber}</p>
                    <p>Pages: {collection.pageCount}</p>
                    <p>Price: ${collection.prices[0].price}</p>
                    {/* <button onClick={(e) => props.handleAddComic(e, result)}>ADD</button> */}
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
        