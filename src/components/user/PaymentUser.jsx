import React, { useEffect } from 'react';
import { ICONCREDIT, ICONVISA, ICONWALLET } from '../../Icon';

import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProfileUser } from '../../redux/thunk/actionThunk';
function PaymentUser(props) {
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch()
    const listProduct = useSelector((state) => state.users);
    console.log(listProduct);
    const InfoListPayment = useSelector((state) => state.users.stepPayment);
    const { listProfile } = listProduct;
    const { acc, profile } = listProfile;
    useEffect(() => {
        dispatch(getProfileUser())
    }, [dispatch])
    return (
        <div className='user'>
            <div className='user__info'>
                <div className='user__info--address'>
                    <div className='d-flex justify-content-between align-items-start'>
                        <p>Shipping Address</p>
                        <button onClick={() => setDisplay(true)}>Edit</button>
                    </div>
                    <div>
                        <div className='d-flex'>
                            {acc && <>
                                <p className='fws-text'>{profile.fullname}</p>
                                <p className='fws-text'>{acc.telephone}</p>
                            </>}
                        </div>
                        {profile &&
                            <p className='fws-text'> {profile.address}</p>
                        }
                    </div>
                </div>
                <div className='user__info--cart'>
                    <p>Cart</p>
                    {InfoListPayment && InfoListPayment.map((item, i) => (
                        <div className='user__info--cart--item' key={i} item={item}>
                            <div className='d-flex'>
                                <img src="https://img.alicdn.com/imgextra/i4/201255257/TB2PK2ZnHsrBKNjSZFpXXcXhFXa_!!201255257.jpg" alt="imagee" />
                                <p className='fws-text'>{item.product_name}</p>
                            </div>
                            <div>
                                <p className='fws-text'>$ {item.product_discount * item.quantity}</p>
                                <p>$ {item.product_price * item.quantity}</p>
                                <p>-{item.product_percent}</p>
                            </div>
                            <p className='fws-text'>Quantity: <span className='fws-text'>{item.quantity}</span></p>
                        </div>
                    ))}
                </div>
            </div>
            {display ? ("") : (<div className='user__order'>
                <form>
                    <div className='user__order--payment'>
                        <h5>Payment Method</h5>
                        <div className='d-flex justify-content-between mb-4'>
                            <div className='d-flex align-items-center'>
                                <i className={ICONCREDIT}></i>
                                <p>Payment On Delivery</p>
                            </div>
                            <input type="radio" name='choose' />
                        </div>
                        <div className='d-flex justify-content-between mb-4'>
                            <div className='d-flex align-items-center'>
                                <i className={ICONVISA}></i>
                                <p>Credit Card</p>
                            </div>
                            <input type="radio" name='choose' />
                        </div>
                        <div className='d-flex justify-content-between mb-4'>
                            <div className='d-flex align-items-center'>
                                <i className={ICONWALLET}></i>
                                <p>MOMO Wallet</p>
                            </div>
                            <input type="radio" name='choose' />
                        </div>
                    </div>
                    <div className='user__order--info'>
                        <div className='user__order--info--voucher'>
                            <h5>Voucher</h5>
                            <div className='d-flex justify-content-between mt-3'>
                                <input type="text" placeholder='Enter voucher(apply only once)' />
                                <button type='button'>Apply</button>
                            </div>
                        </div>
                        <div className='user__order--info--total mt-4'>
                            <h5>Information Order</h5>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Provisional Price</p>
                                <p>$ 30</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Shipping Fee</p>
                                <p>$ 4</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Voucher</p>
                                <p>$ 0</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Total:</p>
                                <p>$ 34</p>
                            </div>
                            <div>
                                <button type='submit'>ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>)}

            {display ? (<div className='user__form'>
                <form action="" >
                    <h4>SHIPPING ADDRESS</h4>
                    <div className='user__form--name'>
                        <label htmlFor="formControlInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='user__form--contact'>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Phone</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className='user__form--address'>
                        <label htmlFor="formControlInput" className="form-label">Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className='user__form--btn'>
                        <button type="button" onClick={() => setDisplay(false)}>Cancel</button>
                        <button type="button">Save</button>
                    </div>
                </form>
            </div>) : ("")}
        </div>
    );
}

export default PaymentUser;