import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { ICONMINUS, ICONPLUS, ICONTRASH } from '../../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getDataCartItem } from './../../redux/thunk/actionThunk';
import CartItem from './CartItem';
import SelectItem from './SelectItem';

function CartUser(props) {
    const listProduct = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCartItem())
    }, [dispatch]);
    return (
        <div className='list'>
            <ul className="list-product">
                {listProduct.cart.length > 0 && listProduct.cart.map((goods, index) => (
                    <CartItem goods={goods} key={index} />
                ))}
                <div className='list-product__btn'>
                    <button type='button'>Clear All</button>
                </div>
            </ul>
            <div className='list-selection'>
                {listProduct.stepPayment.length > 0 && listProduct.stepPayment.map((item, index) =>
                    <SelectItem item={item} key={index} />
                )}

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