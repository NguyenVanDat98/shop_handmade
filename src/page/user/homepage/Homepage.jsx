import React, { useEffect } from 'react';
import { SlideShow, ListProduct } from '../../../components/index.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemNotFound from '../../../components/user/ItemNotFound.jsx';
import { pathNameAd } from '../../../common/pathName.js';

const Homepage = props => {
    const navigatePage = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : { type: "" }
    const listItem = useSelector((state) => state.users.listProduct);

    const navi = useNavigate()
    useEffect(() => {
        (navigatePage.type === "admin") && navi(pathNameAd.dashboard)
    }, [navigatePage.type, navi])
    const checkListproducts = () => {
        let products = listItem || null;
        return (products !== null && products.length)
    }
    return (
        <>
            <SlideShow />
            <ListProduct />
            {checkListproducts() === false || checkListproducts === 0 ? <ItemNotFound /> : ("")}
        </>

    );
};



export default Homepage;