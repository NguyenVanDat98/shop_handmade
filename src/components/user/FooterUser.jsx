import React from 'react';
import { ICONFACEBOOK, ICONINSTA, ICONTWITTER } from './../../Icon/index';


const FooterUser = props => {
    return (
        <div className='footer'>
            <div className="footer__contact">
                <h5>Contact Us</h5>
                <p>Email: <span>handmadeshopdn22@gmail.com</span></p>
                <p>Telephone: <span>0975327883</span></p>
            </div>
            <div className="footer__story">
                <h5>About Us</h5>
                <p>Story</p>
                <p>Vision</p>
            </div>
            <div className="footer__social">
                <h5>Social Media</h5>
                <p><i className={ICONFACEBOOK}></i> Facebook</p>
                <p><i className={ICONINSTA}></i> Instagram</p>
                <p><i className={ICONTWITTER}></i> Twitter</p>
            </div>
        </div>
    );
};



export default FooterUser;