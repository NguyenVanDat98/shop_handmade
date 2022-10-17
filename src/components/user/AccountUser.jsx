import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ICONUSER } from '../../Icon';
import { fetchAccount } from '../../redux/userReducer/action-reduce';


function AccountUser(props) {
    const [account, setAccount] = useState(false);
const dispatch = useDispatch()
    const navi = useNavigate()
    const logOut = () => {
        window.localStorage.removeItem("infoAccount")
        dispatch(fetchAccount({}))
        navi("/login")
    }
    return (
        <div className="header__login">
            <p>{props.namee}</p>
            <span onClick={() => setAccount(!account)}>
                <i className={ICONUSER}></i>
            </span>
            {account && (<ul className="header__account">
                <Link to="/profileuser" ><li>My Account</li></Link>
                <li><span onClick={() => logOut()} >Log Out</span></li>
            </ul>)}
        </div>
    );
}

export default AccountUser;