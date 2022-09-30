import React from 'react';

import { SlideShow, ListProduct, SearchUser, Filter, Sort, Text } from '../../../components/index.js';

import Pageroot from '../pageroot/Pageroot';


const Homepage = props => {

    return (
        <div>
            <Pageroot search={<SearchUser />} account={<Text />}>
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