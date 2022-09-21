import React from 'react';
import { SlideShow , ListProduct,SearchUser } from '../../../components/index.js';

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