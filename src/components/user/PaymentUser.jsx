import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ICONCREDIT, ICONVISA, ICONWALLET } from '../../Icon';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { getProfileUser } from '../../redux/thunk/actionThunk';
import { useMemo } from 'react';
import { tempInfoUser } from '../../redux/userReducer/action-reduce';

const SHIPPING_FEE = 4
const VOUCHER = 0
function PaymentUser(props) {
    const [display, setDisplay] = useState(false);
    const [addChoose, setAdd] = useState(null);
    const [arr, setArr] = useState([]);
    const dispatch = useDispatch()
    const listProduct = useSelector((state) => state.users);
    const [valueF , setValueF ]=  useState({
         telephone: 0,
            fullname: "",
            email:"",
            address : ""
    })
    const { stepPayment,listProfile } = listProduct
    const { acc, profile } = listProfile;   
  

    const totalBill =()=>{
       if( stepPayment){
            const _ = stepPayment.reduce((a, e) => a + parseInt(e.quantity), 0);
            const __ = stepPayment.reduce((a, e) => a + parseFloat(e.product_discount) * parseInt(e.quantity), 0)
            return { total : parseFloat(__) , amount: parseFloat(_)}
        }else{
            return{ total : 0 , amount: 0 }}
    } 
    const TOTAL_BILL =()=>{
        return(parseFloat(totalBill().total) +( totalBill().total===0?0: parseFloat(SHIPPING_FEE))-parseFloat(VOUCHER))
    }
    const InfoListPayment = useSelector((state) => state.users.stepPayment);
const hangdleChangeForm =(e)=>{
    setValueF({...valueF,[e.target.name]: e.target.value})
}

const handleSave =(e)=>{
   e.preventDefault();
   setArr((s)=>[...s,valueF])
   
}

    useEffect(() => {
        dispatch(getProfileUser())
    }, [dispatch])

    return (
        <div className='user'>
            <div className='user__info'>
                <div className='user__info--address'>
{/* {-----------------------------------Shipping Address---------------------------------------------------} */}
                    <div className='d-flex justify-content-between align-items-start address-title'>
                        <p>Shipping Address</p>
                        <button onClick={() => setDisplay(true)}>Edit</button>
                    </div>
                    { acc && <div className='info-user'>  
                            <button onClick={()=>setAdd({
                                emai : profile.emai,
                                fullname:profile.fullname,
                                telephone:acc.telephone,
                                address: profile.address
                            })}>Choose</button>                          
                            <h5>{profile.fullname}<span>{acc.telephone} </span> </h5>                                                  
                            <p className='fws-text'> {profile.address}</p>                        
                    </div>}
                    { arr &&
                    arr.map((_,i)=>
                    <div className='info-user' key={i}>                    
                            <button onClick={()=>{setAdd(_) }}>Choose</button>                          
                            <h5>{_.fullname}   <span>{_.telephone} </span> </h5>                                            
                            <p className='fws-text'> {_.address}</p>                        
                        </div>
                    )
                    
                    }
                    

                </div>
{/* {-----------------------------------List product---------------------------------------------------} */}
                <div className='user__info--cart'>
                    <p >Cart <span>Amount list payment: {totalBill().amount}</span></p>
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
{/* {-----------------------------------info method payment---------------------------------------------------} */}

            {display ? ("") : (<div className='user__order'>
                <form  >
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
                <form onSubmit={(e)=>handleSave(e)}>
                    <h4>SHIPPING ADDRESS</h4>
                    <div className='user__form--name'>
                        <label htmlFor="formControlInput" className="form-label">Full Name</label>
                        <input type="text" value={valueF.fullname} required name={"fullname"} onChange={hangdleChangeForm} className="form-control" />
                    </div>
                    <div className='user__form--contact'>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Phone</label>
                            <input type="number" minLength="9" name={"telephone"} value={valueF.telephone} onChange={hangdleChangeForm}  maxLength="11" required className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Email</label>
                            <input type="email" value={valueF.email} name={"email"} onChange={hangdleChangeForm} className="form-control" />
                        </div>
                    </div>
                    <div className='user__form--address'>
                        <label htmlFor="formControlInput" className="form-label">Address</label>
                        <input type="text" value={valueF.address} required name={"address"} onChange={hangdleChangeForm} className="form-control" />
                    </div>
                    <div className='user__form--btn'>
                        <button type="button" onClick={() => setDisplay(false)}>Cancel</button>
                        <button type='submit' >Save</button>
                    </div>
                </form>
            </div>) : ("")}
        </div>
    );
}

export default PaymentUser;