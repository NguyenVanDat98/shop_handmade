import React from 'react';
import logo from "../../img/logo.png"
import { ICONCART } from '../../Icon';
import { Link } from 'react-router-dom';
Header.defaultProps = {
    cart: <span className="header__cart" style={{ marginLeft: "3px" }}>
        <i className={ICONCART} total-product={0}></i>
    </span>
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
                {cart}

            </div>

            {children}
        </div >
    );
}

export default Header;