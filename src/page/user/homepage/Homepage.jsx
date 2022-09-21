import React from 'react';
import SlideShow from './../../../components/user/Slider';

import SearchUser from './../../../components/user/SearchUser';
import ListProduct from './../../../components/user/ListProduct';
import Pageroot from '../pageroot/Pageroot';
import Filter from '../../../components/user/Filter';
import Sort from '../../../components/user/Sort';

const Homepage = props => {
    return (
        <div>
            <Pageroot search={<SearchUser />}>
                <SlideShow />
                <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "55px" }}>
                    <Filter />
                    <Sort />
                </div>
                <ListProduct />
            </Pageroot>
        </div>
    );
};



export default Homepage;