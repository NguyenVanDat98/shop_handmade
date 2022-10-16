import React, { useState } from 'react';
import { ICONMINUS, ICONPLUS, ICONTRASH } from '../../Icon';
import { useDispatch } from 'react-redux';
import { ChangeQuantityItem, DeleteItem } from '../../redux/userReducer/action-reduce';

function SelectItem({ item }) {
    const dispatch = useDispatch();
    const handleQuantity = (e) => {
        const temp = e.target.dataset.value;
        dispatch(ChangeQuantityItem({ item: item, temp: temp }))
    }
    const DeleteSelectItem = (e) => {
        dispatch(DeleteItem(e));
    }
    return (
        <div className='list-goods__item'>
            <img src={item.img} alt="" />
            <div className='list-goods__item--info'>
                <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
                <p>${item.price}</p>
            </div>
            <div className='list-goods__item--btn'>
                <div>
                    <i className={ICONMINUS} data-value="minus" onClick={handleQuantity}></i>
                    <p>{item.quantity}</p>
                    <i className={ICONPLUS} data-value="plus" onClick={handleQuantity}></i>
                </div>
                <button className='btn'><i className={ICONTRASH} onClick={() => DeleteSelectItem(item)} /></button>
            </div>
        </div>
    );
}

export default SelectItem;