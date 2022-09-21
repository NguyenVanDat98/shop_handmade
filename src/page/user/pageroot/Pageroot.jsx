import React from 'react';
import {Header,BodyUser,FooterUser}from "../../../components/index.js"

const Pageroot = ({ search, children }) => {
    return (
        <div>
            <Header search={search}></Header>
            <BodyUser>
                {children}
            </BodyUser>
            <FooterUser />
        </div>

    );
};



export default Pageroot;