import React from 'react';

function SignUp(props) {
    return (
        <div>
            <div className='rolemodal'>
                <div className='sign'>
                    <h1>Sign Up</h1>
                    <div className='sign__name'>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='sign__phone'>
                        <input type="number" placeholder='Phone' />
                    </div>
                    <div className='sign__address'>
                        <input type="text" placeholder='Shipping Address' />
                    </div>
                    <div className='sign__password'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className='sign__repassword'>
                        <input type="password" placeholder='Re-enter password' />
                    </div>
                    <div className='sign__btn'>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;