import React, { useRef, useState } from 'react';
import { ICONPASS } from '../../Icon';
import { Link, useNavigate } from 'react-router-dom';
import icongoogle from "../../img/icongoogle.png";

import { getAccount } from '../../api/apiMethod';
import { toast } from 'react-hot-toast';


function Login(props) {
    const navi = useNavigate()
    const focusPass = useRef()
    const focusUserName = useRef()
    const [typePass, setTypePass] = useState(true)
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    })
    const getValueInput = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        })
    }
    const wait = () => {
        navi("/")
    }

    const handleChangeType = () => {
        setTypePass(!typePass)
    }
    const CheckLogin = async () => {
        getAccount(`?user_name=${formInput.username}`).then((res) => res.json())
            .then(res => {
                if (res.length !== 0) {
                    if (res[0].type !== "admin") {
                        if (res[0].password === formInput.password) {
                            localStorage.setItem("infoAccount", JSON.stringify({ id: res[0].id, userName: res[0].user_name }))
                            setTimeout(wait, 2000)
                            toast.success("Success Login!")

                        } else {
                            toast.error("Please enter password again!")
                            focusPass.current.focus()
                            focusPass.current.value = ""
                        }
                    } else {
                        //admin
                    }
                } else {
                    toast.error("Please enter again user name!")
                    focusUserName.current.focus();
                    focusPass.current.value = "";
                    focusUserName.current.value = "";
                }

            })


    }

    return (
        <div className='rolemodal'>
            <div className='login'>
                <h1>Log in</h1>
                <div className='login__name'>
                    <input ref={focusUserName} type="text" placeholder='Phone number/ Username' autoComplete='off' name="username" onChange={getValueInput} />
                </div>
                <div className='login__pass'>
                    <input ref={focusPass} type={typePass ? "password" : "text"} placeholder='Password' name="password" autoComplete='off' onChange={getValueInput} />
                    <i onClick={handleChangeType} className={ICONPASS}></i>
                    <p>Forgot password?</p>
                </div>
                <div className='login__btn'>
                    <button onClick={CheckLogin}>Continue</button>
                    <p><img src={icongoogle} alt="" />Google</p>

                    <label className='d-flex flex-wrap justify-content-center'>
                        <p>First time you come to Handmade Shop?

                        </p><Link to="/signup">
                            <strong>  Sign up</strong>
                        </Link>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Login;