import React from 'react';
import { ICONMINUS, ICONPLUS, ICONTRASH } from '../../Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectItem } from '../../redux/userReducer/action-reduce';

function CartItem({ goods }) {
    const [add, setAdd] = useState(true);
    const dispatch = useDispatch();
    const handleAddStep = (data) => {

        dispatch(SelectItem(data))

    }
    return (
        <li className="list-product__add">
            <div className='list-product__detail'>
                <div>
                    <img src={goods.img} alt={goods.name} />
                </div>
                <div>
                    <p>{goods.name}</p>
                    <p>{goods.description}</p>
                </div>
            </div>
            <div>
                <p>${goods.price}</p>
            </div>
            <div className='d-flex flex-column justify-content-between' style={{ height: "100%" }}>
                <button className={`btn ${add === 2 ? "btn-success" : "btn-danger"}`} disabled={!add ? true : false} onClick={() => { handleAddStep(goods); setAdd(false) }}>Add</button>
                <i className={ICONTRASH}></i>
            </div>
        </li>
    );
}

export default CartItem;