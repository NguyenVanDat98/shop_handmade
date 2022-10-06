import React from 'react';
import { Header, SignUp } from '../../../components';
function SignUpPage(props) {
    return (
        <div>
            <Header cart={false} />
            <SignUp />
        </div>
    );
}

export default SignUpPage;