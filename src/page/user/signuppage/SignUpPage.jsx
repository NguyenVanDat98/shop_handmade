import React from 'react';
import { Header, SignUp, FooterUser } from '../../../components';
import SignUpFix from './../../../components/user/SignUpFix';
function SignUpPage(props) {
    return (
        <>
            <Header cart={false} />
            {/* <SignUp /> */}
            <SignUpFix />
            <FooterUser />
        </>
    );
}

export default SignUpPage;