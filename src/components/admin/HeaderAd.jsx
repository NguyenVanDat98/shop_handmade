import React from 'react';

import {Account} from './../index';

const HeaderAd = ({search}) => {
    return (
        <div className='headerAd'>
            <Account/>
            {search}
        </div>
    );
};



export default HeaderAd;