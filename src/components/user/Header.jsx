import React, { memo, useState } from 'react';
import logo from "../../img/logo.png"
import { ICONCART } from '../../Icon';
import { Link} from 'react-router-dom';

import SearchUser from './SearchUser';
Header.defaultProps = {
    cart: true,
    search:false
}

function Header({ search, children, cart }) {
    const [show, setShow] = useState(false);
    return (
        <div className="header">
            <Link to="/">
                <div className='header__img'>
                    <img src={logo} alt="" className="header__image" />
                </div>
            </Link>
            <div className='d-flex'>
                {search &&<SearchUser/>}
                {cart && <span className="header__cart" style={{ marginLeft: "8px" }}>
                    <i className={ICONCART} total-product={0} onClick={() => setShow(!show)}></i>
                    {show ? (<ul className='cart-list'>
                        <div className='cart-title'>
                            <p>Your Shopping Cart</p>
                            <p onClick={() => setShow(!show)}>x</p>
                        </div>
                        <li className="cart-item">
                            <div className='cart-item__info'>
                                <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="" />
                                <p>Boat</p>
                            </div>
                            <div className='cart-item__detail'>
                                <p>$30</p>
                            </div>
                            <p>Qty: 2</p>
                        </li>
                    </ul>) : ("")}
                </span>}
            </div>
            {children}
        </div >
    );
}

export default memo(Header);