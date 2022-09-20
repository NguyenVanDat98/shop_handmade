import React from 'react';
import SlideShow from '../../../components/user/slider';
import ListProduct from '../../../componentuser/user/listProduct';
import SearchUser from '../../../componentuser/user/SearchUser';

import Pageroot from '../pageroot/Pageroot';

const Homepage = props => {
    return (
        <div>
            <Pageroot search={<SearchUser />}>
                <SlideShow />
                <ListProduct />
            </Pageroot>
        </div>
    );
};



export default Homepage;