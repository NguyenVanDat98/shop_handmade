
import React from 'react';
import { ICONSEARCH } from '../../Icon';


const SearchAd = props => {
    return (
        <div className='searchBox'>
            <input type="text" placeholder='Search...' />
            <i className={ICONSEARCH}></i>
        </div>
    );
};



export default SearchAd;