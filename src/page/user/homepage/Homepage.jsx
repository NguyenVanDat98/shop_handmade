import React, { useEffect } from 'react';
import { SlideShow, ListProduct} from '../../../components/index.js';
import { useNavigate } from 'react-router-dom';

const Homepage = props => {
    const navigatePage = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : { type: "" }
    const navi = useNavigate()
    useEffect(() => {
        (navigatePage.type === "admin") && navi("/admin/Dashboard")
    }, [navigatePage.type,navi])
    return (
        <>
            <SlideShow />
            <ListProduct />
        </>

    );
};



export default Homepage;