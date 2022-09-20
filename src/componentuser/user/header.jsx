import React from 'react';

import logo from "../../img/logo.png"
import { IconCart, IconSearch, IconUser } from '../../Icon';

import { useState } from "react";
Header.propTypes = {

};

function Header({ children }) {
    const [account, setAccount] = useState(false);
    return (
        <div className="header">
            <img src={logo} alt="" className="header__image" />
            {children}
            <span className="header__cart">
                <i className={IconCart} total-product={5}></i>
            </span>
            <div className="header__login">
                <h3>Login</h3>
                <span onClick={() => setAccount(!account)}>
                    <i className={IconUser}></i>
                    {account ? (<ul className="header__account">
                        <li><a href="#">My account</a></li>
                        <li><a href='#'> Transaction history</a></li>
                        <li><a href='#'>Logout</a></li>
                    </ul>) : ("")}
                </span>
            </div>
        </div >
    );
}

export default Header;