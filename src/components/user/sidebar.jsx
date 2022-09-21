import React from 'react';
import { IconCart, IconHome, IconMail } from '../../Icon';


function Sidebar(props) {
    return (
        <div style={{ position: "relative", width: "100px", margin: '20px' }}>
            <div className="sidebar">
                <span><i className={IconHome}></i></span>
                <span><i className={IconCart}></i></span>
                <span><i className={IconMail}></i></span>
            </div>
        </div>
    );
}

export default Sidebar;
