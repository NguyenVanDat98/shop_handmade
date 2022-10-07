import React from 'react';
import { Header } from '../../../components';
import Login from '../../../components/user/Login';

function LoginPage(props) {
    return (
        <div>
            <Header cart={false} />
            <Login />
        </div>
    );
}

export default LoginPage;