import React from 'react';
import { ICONUSER } from '../../Icon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileUser, updateInfoUser } from '../../redux/thunk/actionThunk';
import { useNavigate } from 'react-router-dom';
import { fetchAccount, SaveCart } from './../../redux/userReducer/action-reduce';

function ProfileUser(props) {
    const navi = useNavigate()
    const logOut = () => {
        window.localStorage.removeItem("infoAccount")
        dispatch(fetchAccount({}))
        navi("/login")
        dispatch(SaveCart([]))
    }
    const [info, setInfo] = useState(false);
    const [form, setForm] = useState(false);
    const [order, setOrder] = useState(false);
    const [step, setStep] = useState(false);

    const dispatch = useDispatch()
    const profileUsernow = useSelector((state) => state.users.listProfile);
    const { acc, profile, payment } = profileUsernow;
    const [valueform, setValueform] = useState({
        fullname: "",
        telephone: "",
        email: "",
        address: ""
    });

    const handleChangevalue = (e) => {
        setValueform({
            ...valueform,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (profile) {

            if (
                valueform.fullname === profile.fullname &&
                valueform.telephone === acc.telephone &&
                valueform.email === profile.email &&
                valueform.address === profile.address
            ) {
                setStep(true)
            } else {
                setStep(false)
            }
        }
    }, [valueform, acc, profile])
    useEffect(() => {
        profile && setValueform({
            fullname: profile.fullname,
            telephone: acc.telephone,
            email: profile.email,
            address: profile.address
        })
    }, [profile, acc])
    const handleCancel = () => {
        setForm(false);
        setInfo(false);
        setValueform({
            fullname: profile.fullname,
            telephone: acc.telephone,
            email: profile.email,
            address: profile.address
        })
    }
    const handleUpdateProfile = (e) => {
        e.preventDefault()
        dispatch(updateInfoUser({ ...profileUsernow, valueform }, () => {
            setForm(false)
            setInfo(false)
            setStep(true)
        }))
    }
    useEffect(() => {
        dispatch(getProfileUser());
    }, [dispatch])
    return (
        <div className='profile'>
            <div className="profile__image">
                <div>
                    <button className="btn btn-success logout" onClick={logOut}>Logout</button>
                </div>
                <div>
                    <span><i className={ICONUSER}></i></span>
                </div>
                <div>
                    {profile && <>
                        <p>{profile.fullname}</p>
                        <p>{profile.address}</p>
                    </>}
                </div>
                <div>
                    <button className='btn btn-primary' onClick={() => { setOrder(false); setInfo(false); setForm(false) }}>Infomation</button>
                    <button className='btn btn-danger' onClick={() => { setOrder(true); setInfo(true); setForm(false) }}>Order History</button>
                </div>
            </div>
            {info ? ("") : (<div className="profile__info">
                <div>
                    <button className='btn btn-warning' onClick={() => { setInfo(true); setForm(true); }}>Edit</button>
                </div>
                {acc && <div className='profile__info--detail'>
                    <h5> Full Name:         <span>{profile.fullname} </span></h5>
                    <h5> Phone Number:      <span> {acc.telephone}</span></h5>
                    <h5> Shipping Address:  <span> {profile.address}</span></h5>
                    <h5> Email Address:     <span> {profile.email}</span></h5>
                    <h5> Total Orders:      <span> {payment.total}</span></h5>
                </div>}
            </div>)}
            {form ? (<div className='profile__form'>
                <form action="" >
                    <h4>UPDATE INFORMATION</h4>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" name="fullname" onChange={handleChangevalue} value={valueform.fullname} />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="telephone" onChange={handleChangevalue} value={valueform.telephone} />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" onChange={handleChangevalue} value={valueform.email} />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" onChange={handleChangevalue} value={valueform.address} />
                    </div>
                    <div>
                        <button disabled={step} onClick={handleUpdateProfile} className='btn btn-success'>Update</button>
                        <button className='btn btn-danger' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>) : ("")}
            {order ? (<table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Purchase date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Boat</td>
                        <td>3</td>
                        <td>$60</td>
                        <td >4-9-2022</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>RickShaw</td>
                        <td>4</td>
                        <td>$80</td>
                        <td >13-7-2022</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Kitchen</td>
                        <td>1</td>
                        <td>$30</td>
                        <td >10-5-2022</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Wells</td>
                        <td>2</td>
                        <td>$40</td>
                        <td >14-4-2022</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Shelf</td>
                        <td>2</td>
                        <td>$60</td>
                        <td>22-2-2022</td>
                    </tr>
                </tbody>
            </table>) : ("")}
        </div>
    );
}

export default ProfileUser;
