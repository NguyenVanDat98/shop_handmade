import React from 'react';
import { Header, BodyUser, FooterUser } from "../../../components/index.js"

const Pageroot = ({ search, children, account }) => {
    return (
        <div>
            <Header search={search} >{account}</Header>
            <BodyUser>
                {children}
            </BodyUser>
            <FooterUser />
        </div>

    );
};




export default Pageroot;