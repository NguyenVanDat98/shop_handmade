import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const SearchAd = props => {
    return (
        <div className='searchBox'>
            <input type="text" placeholder='Search...' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
};



export default SearchAd;