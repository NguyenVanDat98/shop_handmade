import React from 'react';
import { SideBar } from './../../components/index.js';


const BodyUser = ({ children }) => {
    return (
        <div className='body-user'>
            <SideBar />
            <div style={{ display: "block", flexGrow: 1, margin: "0 auto" }}>
                {children}
            </div>
        </div>
    );
};



export default BodyUser;