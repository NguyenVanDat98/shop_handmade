import React from 'react';

import Account from './Account';

const HeaderAd = ({search}) => {
    return (
        <div className='headerAd'>
            <Account/>
            {search}
        </div>
    );
};



export default HeaderAd;