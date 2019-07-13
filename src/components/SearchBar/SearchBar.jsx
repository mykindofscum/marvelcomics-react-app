import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [query, setQuery] = React.useState('')

    return (
        <div className='SearchBar'>
            <h3>Search Bar</h3>
            <form onSubmit={(event) => 
                {event.preventDefault();
                props.onSubmit(query)}}>
                
                <label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Comic by Title"
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value) 
                        }}
                        required
                        pattern=".{2,}"
                    />
                </label>
                <button type='submit'>
                SUBMIT
                </button>
            </form>

        </div>

        );
    };
export default SearchBar;

