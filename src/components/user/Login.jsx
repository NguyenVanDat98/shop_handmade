import React, { useRef, useState } from 'react';
import { ICONPASS } from '../../Icon';
import { Link, useNavigate } from 'react-router-dom';
import icongoogle from "../../img/icongoogle.png";

import { getAccount } from '../../api/apiMethod';
import { toast } from 'react-hot-toast';
import { pathNameAd } from '../../common/pathName';


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

    const handleChangeType = () => {
        setTypePass(!typePass)
    }
    const CheckLogin = async () => {
        toast.loading("Loading....")
        getAccount(`?user_name=${formInput.username}&password=${formInput.password}`)
            .then(res => res.json()
            ).catch(err => {
                toast.dismiss();
                toast.error("Login fail_server!")
            }).then(res => {
                if (res.length === 0) {
                    toast.dismiss();
                    switch ("") {
                        case formInput.username:
                            focusUserName.current.focus()
                            toast.error(`Enter ${focusUserName.current.name} again!`)
                            break;
                        case formInput.password:
                            focusPass.current.focus()
                            toast.error(`Enter ${focusPass.current.name} again!`)
                            break;
                        default:
                            toast.error(`Enter ${focusUserName.current.name}/ ${focusPass.current.name} again!`)
                            focusPass.current.focus()
                            break;
                    }
                } else {
                    setTimeout(() => {
                        res[0].type === "admin" ? navi(pathNameAd.dashboard) : navi("/");
                        toast.dismiss();
                        toast.success("Login Success ", { duration: 2000, })
                    }, 2000);
                    localStorage.setItem("infoAccount", JSON.stringify({ id: res[0].id, cart_id: res[0].cart_id, type: res[0].type, userName: res[0].user_name }))
                }
            })
    }

    return (
        <div className='rolemodal'>
            <div className='login signInanimation'>
                <h1>Log in</h1>
                <div className='login__name'>
                    <input ref={focusUserName} type="text" placeholder='Username' autoComplete='off' name="username" onChange={getValueInput} />
                </div>
                <div className='login__pass'>
                    <input ref={focusPass} type={typePass ? "password" : "text"} placeholder='Password' name="password" autoComplete='off' onChange={getValueInput} />
                    <i onClick={handleChangeType} className={ICONPASS}></i>
                    <Link to="/forgotpass">
                        <p>Forgot password?</p>
                    </Link>
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