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

HeaderAd.propTypes = {
    
};

export default HeaderAd;