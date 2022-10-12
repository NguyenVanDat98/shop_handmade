import React from 'react';
import { Header, Login } from '../../../components';
function LoginPage(props) {
    return (
        <div>
            <Header cart={false} />
            <Login />
        </div>
    );
}

export default LoginPage;