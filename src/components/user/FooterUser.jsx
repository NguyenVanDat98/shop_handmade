import React from 'react';
import { ICONFACEBOOK, ICONINSTA, ICONLINKINED, ICONLOCATION, ICONMAIL, ICONPHONE, ICONPINTEREST, ICONTWITTER } from './../../Icon/index';
import logo from "../../img/logo.png";

const FooterUser = props => {
    return (
        <div className='footer'>
            <div className="footer__story">
                <img src={logo} alt="" />
                <div className='d-flex justify-content-between'>
                    <h5>History</h5>
                    <h5>Story</h5>
                    <h5>Vision</h5>
                </div>
                <p>HandmadeShop &copy; 2022</p>
            </div>
            <div className="footer__contact">
                <p><i className={ICONLOCATION}></i>36 Ngô Quyền Street, Sơn Trà District, Đà Nẵng city</p>
                <p><i className={ICONPHONE}></i>0975327883</p>
                <p><i className={ICONMAIL}></i>handmadeshopdn22@gmail.com</p>
            </div>
            <div className="footer__social">
                <div className='footer__social--email'>
                    <h5>Subscribe</h5>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="input-group-button-right" />
                        <button type="button" className="btn btn-success" id="input-group-button-right">SEND</button>
                    </div>
                </div>
                <div className='footer__social--follow'>
                    <h5>Follow Us</h5>
                    <div className=''>
                        <i className={ICONFACEBOOK}></i>
                        <i className={ICONTWITTER}></i>
                        <i className={ICONPINTEREST}></i>
                        <i className={ICONLINKINED}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default FooterUser;