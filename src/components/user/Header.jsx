import React, { memo } from 'react';
import logo from "../../img/logo.png"
import { ICONCART } from '../../Icon';
import { Link } from 'react-router-dom';
Header.defaultProps = {
    cart: true
}

function Header({ search, children, cart }) {

    return (
        <div className="header">
            <Link to="/">
                <div className='header__img'>
                    <img src={logo} alt="" className="header__image" />
                </div>
            </Link>
            <div className='d-flex'>
                {search}
                {cart && <span className="header__cart" style={{ marginLeft: "8px" }}>
                    <i className={ICONCART} total-product={0}></i>
                </span>}

            </div>

            {children}
        </div >
    );
}

export default memo(Header);