import React from 'react';

function Sort(props) {
    return (
        <div className='sort'>
            <select className='sort__feature'>
                <option value="">Sort</option>
                <option value="">Price(Lowest)</option>
                <option value="">Price(Highest)</option>
                <option value="">Name(A-Z)</option>
                <option value="">Name(Z-A)</option>
            </select>
        </div>
    );
}

export default Sort;