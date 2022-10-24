import React, { useEffect } from 'react';
import { SlideShow, ListProduct } from '../../../components/index.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemNotFound from '../../../components/user/ItemNotFound.jsx';
import { pathNameAd } from '../../../common/pathName.js';

const Homepage = props => {
    const navigatePage = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : { type: "" }
    const navi = useNavigate()
    useEffect(() => {
        (navigatePage.type === "admin") && navi(pathNameAd.dashboard)
    }, [navigatePage.type, navi])

    return (
        <>
            <SlideShow />
            <ListProduct />
        </>

    );
};



export default Homepage;