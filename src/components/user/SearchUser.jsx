import React from 'react';
import { ICONSEARCH } from '../../Icon';
function SearchUser(props) {
    return (
        <div className='search-header'>
            <input type="text" className="form-control" placeholder="Search..."></input>
            <span className="ICONSEARCH">
                <i className={ICONSEARCH} ></i>
            </span>
        </div>
    );
}

export default SearchUser;