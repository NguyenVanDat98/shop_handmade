import React from 'react';
import { Link } from 'react-router-dom';
import { ICONCART, ICONHOME, ICONMAIL } from '../../Icon';


function SideBar(props) {
    return (
        <div style={{ position: "relative", width: "100px", margin: '20px' }}>
            <div className="sidebar">
                <Link to="/">
                    <span><i className={ICONHOME}></i></span>
                </Link>
                <Link to="/cart">
                    <span><i className={ICONCART}></i></span>
                </Link>
                <span><i className={ICONMAIL}></i></span>
            </div>
        </div>
    );
}

export default SideBar;
