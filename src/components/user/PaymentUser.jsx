import React from 'react';


function PaymentUser(props) {
    return (
        <div className='user'>
            <div className='user__info'>
                <form action="" >
                    <h4>SHIPPING ADDRESS</h4>
                    <div className='user__info--name'>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">First Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Last Name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className='user__info--contact'>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Phone</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="formControlInput" className="form-label">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className='user__info--address'>
                        <label htmlFor="formControlInput" className="form-label">Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <h4>PAYMENT METHOD</h4>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault" />
                            <label className="form-check-label" htmlFor="formRadioDefault">Internet Banking</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioChecked" />
                            <label className="form-check-label" htmlFor="formRadioChecked">MOMO Wallet</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioChecked" />
                            <label className="form-check-label" htmlFor="formRadioChecked">Credit Card</label>
                        </div>
                    </div>
                    <h4>DELIVERY</h4>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioChecked" />
                            <label className="form-check-label" htmlFor="formRadioChecked">Home</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioChecked" />
                            <label className="form-check-label" htmlFor="formRadioChecked">Office</label>
                        </div>
                    </div>
                    <div className='user__info--btn'>
                        <button type="button">Save Information</button>
                    </div>
                </form>
            </div>
            <div className='user__order'>

            </div>
        </div>
    );
}

export default PaymentUser;