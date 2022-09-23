import React from 'react';
import { SlideShow, ListProduct, SearchUser, Filter, Sort } from '../../../components/index.js';
import Text from '../../../components/user/Text.jsx';
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