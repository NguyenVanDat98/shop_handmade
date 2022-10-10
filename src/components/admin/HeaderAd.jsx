import React from 'react';
import { Account } from '..';

const HeaderAd = ({search}) => {
    return (
        <div className='headerAd'>
            <Account/>
            {search}
        </div>
    );
};



export default HeaderAd;