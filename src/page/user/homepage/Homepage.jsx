import React, { useEffect } from 'react';

import { SlideShow, ListProduct, SearchUser, Filter, Sort, Text } from '../../../components/index.js';

import Pageroot from '../pageroot/Pageroot';

import AccountUser from './../../../components/user/AccountUser';
import { useNavigate } from 'react-router-dom';


const Homepage = props => {
    const navigatePage = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : { type: "" }

    const navi = useNavigate()
    useEffect(() => {
        (navigatePage.type === "admin") && navi("/admin/Dashboard")
    }, [])



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