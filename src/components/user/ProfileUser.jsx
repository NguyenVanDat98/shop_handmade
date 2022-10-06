import React from 'react';
import { ICONUSER } from '../../Icon';
import { useState } from 'react';

function ProfileUser(props) {
    const [show, setShow] = useState(false);
    return (
        <div className='profile d-flex'>
            <div className="profile__image">
                <div>
                    <span><i className={ICONUSER}></i></span>
                </div>
                <div>
                    <p>Nguyễn Văn Đạt</p>
                    <p>Vân Đồn Street, Nại Hiên Đông Ward,Sơn Trà District, Đà Nẵng city</p>
                </div>
                <div>
                    <button className='btn btn-primary'>Infomation</button>
                    <button className='btn btn-danger'>Order History</button>
                    <button className='btn btn-success'>Viewed Products</button>
                </div>
            </div>
            {show ? ("") : (<div className="profile__info">
                <div>
                    <button className='btn btn-warning' onClick={() => setShow(true)}>Edit</button>
                </div>
                <div>
                    <label>User Name</label>
                    <label>Phone Number</label>
                    <label>Shipping Address</label>
                    <label>Email Address</label>
                    <label>Total Orders</label>
                </div>
                <div>
                    <p>Nguyễn Văn Đạt</p>
                    <p>0965782356</p>
                    <p>Vân Đồn Street, Nại Hiên Đông Ward, Sơn Trà District, Đà Nẵng City</p>
                    <p>nguyenvandatdn97@gmail.com</p>
                    <p>20</p>
                </div>
            </div>)}
            {show ? (<div className='profile__form'>
                <form action="" >
                    <h4>UPDATE INFORMATION</h4>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Phone</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={() => setShow(false)}>Cancel</button>
                        <button className='btn btn-success'>Update</button>
                    </div>
                </form>
            </div>) : ("")}
        </div>
    );
}

export default ProfileUser;
