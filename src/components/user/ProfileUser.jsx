import React from 'react';
import { ICONUSER } from '../../Icon';
import { useState } from 'react';

function ProfileUser(props) {
    const [info, setInfo] = useState(false);
    const [form, setForm] = useState(false);
    const [order, setOrder] = useState(false);
    return (
        <div className='profile'>
            <div className="profile__image">
                <div>
                    <span><i className={ICONUSER}></i></span>
                </div>
                <div>
                    <p>Nguyễn Văn Đạt</p>
                    <p>Vân Đồn Street, Nại Hiên Đông Ward,Sơn Trà District, Đà Nẵng city</p>
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
            {form ? (<div className='profile__form'>
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
                        <button className='btn btn-danger' onClick={() => { setForm(false); setInfo(false) }}>Cancel</button>
                        <button className='btn btn-success'>Update</button>
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
