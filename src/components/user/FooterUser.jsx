import React from 'react';
import { ICONFACEBOOK, ICONLINKINED, ICONLOCATION, ICONMAIL, ICONPHONE, ICONPINTEREST, ICONTWITTER } from './../../Icon/index';
import logo from "../../img/logo.png";
import { useEffect } from 'react';
import { useCallback } from 'react';

const FooterUser = props => {
    return (
        // <div className='footer'>
        //     <div className="footer__story">
        //         <img src={logo} alt="" />
        //         <div className='d-flex justify-content-between'>
        //             <h5>History</h5>
        //             <h5>Story</h5>
        //             <h5>Vision</h5>
        //         </div>
        //         <p>HandmadeShop &copy; 2022</p>
        //     </div>
        //     <div className="footer__contact">
        //         <p><i className={ICONLOCATION}></i>36 Ngô Quyền Street, Sơn Trà District, Đà Nẵng city</p>
        //         <p><i className={ICONPHONE}></i>0975327883</p>
        //         <p><i className={ICONMAIL}></i>handmadeshopdn22@gmail.com</p>
        //     </div>
        //     <div className="footer__social">
        //         <div className='footer__social--email'>
        //             <h5>Subscribe</h5>
        //             <div className="input-group">
        //                 <input type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="input-group-button-right" />
        //                 <button type="button" className="btn btn-success" id="input-group-button-right">SEND</button>
        //             </div>
        //         </div>
        //         <div className='footer__social--follow'>
        //             <h5>Follow Us</h5>
        //             <div className=''>
        //                 <i className={ICONFACEBOOK}></i>
        //                 <i className={ICONTWITTER}></i>
        //                 <i className={ICONPINTEREST}></i>
        //                 <i className={ICONLINKINED}></i>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <footer className='footer-page' >
            <div className='main-footer'>
                <div className='contact'>
                    <div className='contact-left'>
                    <p>HandmadeShop &copy; 2022</p> 
                    </div>
                    <div className='contact-right'> 
                        <div className="footer__contact">
                            <p><i className={ICONLOCATION}> </i>36 Ngô Quyền Street, Sơn Trà District, Đà Nẵng city</p>
                            <p><i className={ICONPHONE} ></i>0975327883</p>
                            <p><i className={ICONMAIL}></i>handmadeshopdn22@gmail.com</p>
                        </div>
                        <h3>   FOLLOW US    </h3>
                        <div className='icon-logo'>
                            <i className={ICONFACEBOOK}></i>
                            <i className={ICONTWITTER}></i>
                            <i className={ICONPINTEREST}></i>
                            <i className={ICONLINKINED}></i>
                        </div>
                        <div className='social_contact'>
                            <h4>Subscribe</h4>
                            <div className=' social_input'>
                                <input type="text" placeholder="Your Email"/>
                                <label>"Press Enter"</label>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={logo} alt="" />

            </div>
        </footer>
    );
};



export default FooterUser;