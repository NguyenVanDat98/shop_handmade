import React from 'react';
import { ICONCREDIT, ICONVISA, ICONWALLET } from '../../Icon';
import { useState } from "react";
import { useSelector } from 'react-redux';

const SHIPPING_FEE = 4
const VOUCHER = 0
function PaymentUser(props) {
    const [display, setDisplay] = useState(false);
    const listProduct = useSelector((state) => state.users);
    const { stepPayment } = listProduct
    console.log(stepPayment);
   
    const totalBill =()=>{
       if( stepPayment){
            const _ = stepPayment.reduce((a, e) => a + parseInt(e.quantity), 0);
            const __ = stepPayment.reduce((a, e) => a + parseFloat(e.product_discount) * parseInt(e.quantity), 0)
            return { total : parseFloat(__) , amount: parseFloat(_)}
        }else{
            return{ total : 0 , amount: 0 }}
    } 
    const TOTAL_BILL =()=>{
            console.log(totalBill().total)
            console.log(SHIPPING_FEE)
            console.log(VOUCHER)
        return(parseFloat(totalBill().total).toFixed(2) +( totalBill().total===0?0: parseFloat(SHIPPING_FEE))-parseFloat(VOUCHER))
    }
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
                            <p className='fws-text'>Nguyễn Văn Đạt</p>
                            <p className='fws-text'>0965782356</p>
                        </div>
                        <p className='fws-text'> Vân Đồn Street, Nại Hiên Đông Ward, Sơn Trà District, Đà Nẵng City</p>
                    </div>
                </div>
                <div className='user__info--cart'>
                    <p >Cart <span>Amount list payment: {totalBill().amount}</span></p>
                    <div className='user__info--cart--item'>
                        <div className='d-flex'>
                            <img src="https://img.alicdn.com/imgextra/i4/201255257/TB2PK2ZnHsrBKNjSZFpXXcXhFXa_!!201255257.jpg" alt="imagee" />
                            <p className='fws-text'>Kitchen</p>
                        </div>
                        <div>
                            <p className='fws-text'>$ 56.4</p>
                            <p>$ 60</p>
                            <p>-6%</p>
                        </div>
                        <p className='fws-text'>Quantity: <span className='fws-text'>2</span></p>
                    </div>
                    <div className='user__info--cart--item'>
                        <div className='d-flex'>
                            <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="imagee" />
                            <p className='fws-text'>Boat</p>
                        </div>
                        <div>
                            <p className='fws-text'>$ 57</p>
                            <p>$ 60</p>
                            <p>-5%</p>
                        </div>
                        <p className='fws-text'>Quantity: <span className='fws-text'>3</span></p>
                    </div>
                    <div className='user__info--cart--item'>
                        <div className='d-flex'>
                            <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="imagee" />
                            <p className='fws-text'>Boat</p>
                        </div>
                        <div>
                            <p className='fws-text'>$ 57</p>
                            <p>$ 60</p>
                            <p>-5%</p>
                        </div>
                        <p className='fws-text'>Quantity: <span className='fws-text'>3</span></p>
                    </div>
                    <div className='user__info--cart--item'>
                        <div className='d-flex'>
                            <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="imagee" />
                            <p className='fws-text'>Boat</p>
                        </div>
                        <div>
                            <p className='fws-text'>$ 57</p>
                            <p>$ 60</p>
                            <p>-5%</p>
                        </div>
                        <p className='fws-text'>Quantity: <span className='fws-text'>3</span></p>
                    </div>
                    <div className='user__info--cart--item'>
                        <div className='d-flex'>
                            <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="imagee" />
                            <p className='fws-text'>Boat</p>
                        </div>
                        <div>
                            <p className='fws-text'>$ 57</p>
                            <p>$ 60</p>
                            <p>-5%</p>
                        </div>
                        <p className='fws-text'>Quantity: <span className='fws-text'>3</span></p>
                    </div>
                    <div className='user__info--cart--item'>
                        <div className='d-flex'>
                            <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="imagee" />
                            <p className='fws-text'>Boat</p>
                        </div>
                        <div>
                            <p className='fws-text'>$ 57</p>
                            <p>$ 60</p>
                            <p>-5%</p>
                        </div>
                        <p className='fws-text'>Quantity: <span className='fws-text'>3</span></p>
                    </div>
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
                                <p>$ {totalBill().total}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Shipping Fee</p>
                                <p>$ {totalBill().total===0 ? 0 : SHIPPING_FEE}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Voucher</p>
                                <p>$ {VOUCHER}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Total:</p>
                                <p>$ {TOTAL_BILL()}</p>
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