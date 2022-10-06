import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function SignUp(props) {
    const focusInputPass = useRef()
    const focusInputRePass = useRef()
    const [formValue, setFormValue] = useState({
        user_name: "",
        tetephone: 0,
        address: "",
        password: "",
        re_password: "",
    })
    const handleChangeInput = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleContinue = () => {
        if (formValue.password !== formValue.re_password) {
            focusInputPass.current.value = "";
            focusInputRePass.current.value = "";
        } else {
            console.log(formValue)
        }
    }

    return (
        <div className='rolemodal'>
            <div className='sign'>
                <h1>Sign Up</h1>
                <div className='sign__name'>
                    <input onChange={handleChangeInput} name="user_name" type="text" placeholder='Name' />
                </div>
                <div className='sign__phone'>
                    <input onChange={handleChangeInput} name="telephone" type="number" placeholder='Phone' />
                </div>
                <div className='sign__address'>
                    <input onChange={handleChangeInput} name="address" type="text" placeholder='Shipping Address' />
                </div>
                <div className='sign__password'>
                    <input onChange={handleChangeInput} ref={focusInputPass} name="password" type="password" placeholder='Password' />
                </div>
                <div className='sign__repassword'>
                    <input onChange={handleChangeInput} ref={focusInputRePass} name="re_password" type="password" placeholder='Re-enter password' />
                </div>
                <div className='sign__btn'>
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;