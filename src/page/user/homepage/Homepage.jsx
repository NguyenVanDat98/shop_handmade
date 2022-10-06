import React from 'react';

import { SlideShow, ListProduct, SearchUser, Filter, Sort, Text } from '../../../components/index.js';

import Pageroot from '../pageroot/Pageroot';


const Homepage = props => {

    return (
        <div>
            <Pageroot search={<SearchUser />} account={<Text />}>
                <SlideShow />
                <div>
                    <div className='feature-filter d-flex justify-content-end ' style={{ paddingRight: "30px" }}  >
                        <Filter />
                        <Sort />
                    </div>
                    <ListProduct />
                </div>

            </Pageroot>

        </div>
    );
};



export default Homepage;