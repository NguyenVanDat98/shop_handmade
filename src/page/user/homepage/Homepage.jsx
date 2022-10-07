import React from 'react';

import { SlideShow, ListProduct, SearchUser, Filter, Sort, Text } from '../../../components/index.js';

import Pageroot from '../pageroot/Pageroot';

import AccountUser from './../../../components/user/AccountUser';


const Homepage = props => {




    return (
        <div>
            <Pageroot search={<SearchUser />} >
                <SlideShow />
                <ListProduct />
            </Pageroot>

        </div>
    );
};



export default Homepage;