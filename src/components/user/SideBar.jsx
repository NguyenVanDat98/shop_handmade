import React from 'react';
import { ICONCART, ICONHOME, ICONMAIL } from '../../Icon';


function Sidebar(props) {
    return (
        <div style={{ position: "relative", width: "100px", margin: '20px' }}>
            <div className="sidebar">
                <span><i className={ICONHOME}></i></span>
                <span><i className={ICONCART}></i></span>
                <span><i className={ICONMAIL}></i></span>
            </div>
        </div>
    );
}

export default Sidebar;
