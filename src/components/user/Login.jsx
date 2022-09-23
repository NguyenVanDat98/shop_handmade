import React from 'react';
import { ICONPASS } from '../../Icon';
import { Link } from 'react-router-dom';
import icongoogle from "../../img/icongoogle.png";


function Login(props) {
    return (
        <div>
            <div className='rolemodal'>
                <div className='login'>
                    <h1>Log in</h1>
                    <div className='login__name'>
                        <input type="text" placeholder='Phone number/ Username' />
                    </div>
                    <div className='login__pass'>
                        <input type="password" placeholder='Password' />
                        <i className={ICONPASS}></i>
                        <p>Forgot password?</p>
                    </div>
                    <div className='login__btn'>
                        <button>Continue</button>
                        <p><img src={icongoogle} alt="" />Google</p>
                        <p>First time you come to Handmade Shop ?
                            <Link to="/signup">
                                <span>Sign up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;