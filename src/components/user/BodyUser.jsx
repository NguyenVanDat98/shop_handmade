import React from 'react';
import { SideBar } from './../../components/index.js';


const BodyUser = ({ children }) => {
    return (
        <div className='body-user'>
            {/* <SideBar /> */}
            <SideBar />
            <div style={{ display: "block", flexGrow: 1, margin: "0 20px" }}>
                {children}
            </div>
        </div>
    );
};



export default BodyUser;