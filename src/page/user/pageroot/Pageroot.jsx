import React from 'react';
import { Header, BodyUser, FooterUser } from "../../../components/index.js"

const Pageroot = ({ search, children, account, cart }) => {
    return (
        <div>
            <Header search={search} cart={cart}>{account} </Header>
            <BodyUser>
                {children}
            </BodyUser>
            <FooterUser />
        </div>

    );
};




export default Pageroot;