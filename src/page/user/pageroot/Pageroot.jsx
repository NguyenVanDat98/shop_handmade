import React from 'react';
import BodyUser from './../../../components/user/BodyUser';
import FooterUser from './../../../components/user/FooterUser';
import Header from '../../../components/user/Header';

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