import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    <div>
        <Link to='' className='NavBar-link'>SEARCH COMICS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='' className='NavBar-link'>My Collection</Link>
    </div>;

return (
    <div className='NavBar'>
        {nav}
    </div>
    );
};

export default NavBar;