import React, { useEffect } from 'react';

import { SlideShow, ListProduct, SearchUser, Filter, Sort, Text } from '../../../components/index.js';

import { useNavigate, useParams } from 'react-router-dom';


const Homepage = props => {
    const navigatePage = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : { type: "" }
    const param = useParams()
    param.id = "/"
    const navi = useNavigate()
    useEffect(() => {
        (navigatePage.type === "admin") && navi("/admin/Dashboard")
    }, [])
    return (
        <>
            <SlideShow />
            <ListProduct />
        </>

    );
};



export default Homepage;