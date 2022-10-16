import React from 'react';
import { Header, Login } from '../../../components';
function LoginPage(props) {
    return (
        <>
            <Header cart={false} />
            <Login />
        </>
    );
}

export default LoginPage;