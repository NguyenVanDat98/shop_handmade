import React from 'react';
import { Link } from 'react-router-dom';

const Account = props => {
    return (
        <Link to="/admin/profile" className='account'>
            <div className='avt'>
            </div>
            <p>Admin</p>
        </Link>
    );
};

export default Account;