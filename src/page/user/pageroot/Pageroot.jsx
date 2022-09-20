import React from 'react';
import BodyUser from '../../../componentuser/user/BodyUser';
import FooterUser from '../../../componentuser/user/FooterUser';
import Header from '../../header/header';

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