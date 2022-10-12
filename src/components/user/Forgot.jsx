import React from 'react';
import { useState } from 'react';

function Forgot(props) {
    const [forgot, setForgot] = useState(false);
    return (
        <div className='rolemodal'>
            {forgot ? ("") : (<div className='forgot'>
                <h4>Please enter your email</h4>
                <div>
                    <input type="text" placeholder='Your email' className='form-input' />
                </div>
                <div>
                    <button onClick={() => setForgot(true)}>Send</button>
                </div>
            </div>)}
            {forgot ? (<div className='setpass'>
                <h4>Please enter information below here</h4>
                <div>
                    <input type="text" placeholder="Your code in email" className='form-input' />
                    <input type="password" placeholder="Set new password " className='form-input' />
                    <input type="password" placeholder="Re-enter new password" className='form-input' />
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>) : ("")}
        </div>
    );
}

export default Forgot;