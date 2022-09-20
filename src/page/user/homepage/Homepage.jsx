import React from 'react';
import ListProduct from '../../../componentuser/user/listProduct';
import SearchUser from '../../../componentuser/user/SearchUser';
import SlideShow from '../../../componentuser/user/slider';
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