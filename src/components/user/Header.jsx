import React from 'react';
import logo from "../../img/logo.png"
import { ICONCART } from '../../Icon';
import { Link } from 'react-router-dom';

function Header({ search, children }) {

    return (
        <div className="header">
            <Link to="/">
                <div className='header__img'>
                    <img src={logo} alt="" className="header__image" />
                </div>
            </Link>
            {search}
            <span className="header__cart">
                <i className={ICONCART} total-product={0}></i>
            </span>
            {children}
        </div >
    );
}

export default Header;