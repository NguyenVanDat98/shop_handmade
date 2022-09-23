import React from 'react';
import { useState } from 'react';
import { ICONUSER } from '../../Icon';


function AccountUser(props) {
    const [account, setAccount] = useState(false);
    return (
        <div className="header__login">
            <span onClick={() => setAccount(!account)}>
                <i className={ICONUSER}></i>
                {account ? (<ul className="header__account">
                    <li><a href="#">My account</a></li>
                    <li><a href='#'> Transaction history</a></li>
                    <li><a href='#'>Logout</a></li>
                </ul>) : ("")}
            </span>
        </div>
    );
}

export default AccountUser;