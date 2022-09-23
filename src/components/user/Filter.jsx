import React from 'react';
import { ICONFUNNEL } from './../../Icon/index';

function Filter(props) {
    return (
        <div className='filter'>
            <select name="" className='filter__price'>
                <option value="1">Filter</option>
                <option value="2">$10 - $30</option>
                <option value="3">$30 - $60</option>
                <option value="4">$60 -100$</option>
            </select>
            <i className={ICONFUNNEL}></i>
        </div>
    );
}

export default Filter;