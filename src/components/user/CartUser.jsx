import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { ICONMINUS, ICONPLUS, ICONTRASH } from '../../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemInCart, getDataCartItem } from './../../redux/thunk/actionThunk';
import CartItem from './CartItem';
import SelectItem from './SelectItem';
import { updateCartItem } from '../../api/apiMethod';

function CartUser(props) {
    const listProduct = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCartItem())
    }, [dispatch]);
    const handleDeleteItem = (item) => {
        const itemDelete = listProduct.cart.filter((_) => item !== _.id);
        dispatch(deleteItemInCart(item, itemDelete))
    }
    return (
        <div className='list'>
            <div className='list-wrap'>
                <ul className="list-product">
                    {listProduct.cart.length > 0 && listProduct.cart.map((goods, index) => (
                        <CartItem goods={goods} key={index} handleDeleteItem={handleDeleteItem} />
                    ))}
                </ul>
                <div className='list-wrap--btn'>
                    <button type='button'>Clear All</button>
                </div>
            </div>
            <div className='list-selection'>
                <div className='list-goods'>
                    {listProduct.stepPayment.length > 0 && listProduct.stepPayment.map((item, index) =>
                        <SelectItem item={item} key={index} />
                    )}
                </div>
                <div className='list-payment'>
                    <div>
                        <p>Amount product: </p>
                        <p>2</p>
                    </div>
                    <div>
                        <p>Total: </p>
                        <p>$60</p>
                    </div>
                    <div>
                        <button>Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartUser;