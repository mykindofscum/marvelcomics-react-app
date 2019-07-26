import React from 'react';
// import React from 'react';
import './Collection.css';

const Collection = (props) => {             
    // let collection = [];
    // if (props.collection) {
        console.log("porp",props.collection);
       let collection = props.collection.map((collection) => (

            <div className="comic">
                <div className="comic-thumbnail-container">
                     {/* <img className="comic-thumbnail" 
                     src={`${collection.thumbnail.path}.${collection.thumbnail.extension}`} 
                    alt="thumbnail" /> */}
                </div>
                <div className="comic-details">
                    <h5>{collection.title}</h5>
                    <p >Description:</p>
                    <p>Issue: {collection.issueNumber}</p>
                    <p>Pages: {collection.pageCount}</p>
                    <p>Price: ${collection.price}</p>
                    <button onClick={(e)=>props.handleDelComic(e, collection) }>DELETE</button>
                </div>
            </div>        
        ))
    // }

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
        