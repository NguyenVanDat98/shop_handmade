import React from 'react';
import { IconSearch } from '../../Icon';
function SearchUser(props) {
    return (
        <div className='Searh-header'>
            <input type="text" className="form-control" placeholder="Search..."></input>
            <span className="iconSearch">
                <i className={IconSearch} ></i>
            </span>
        </div>
    );
}

export default SearchUser;