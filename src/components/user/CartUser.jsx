import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartUser, deleteItemInCart, getDataCartItem } from './../../redux/thunk/actionThunk';
import CartItem from './CartItem';
import SelectItem from './SelectItem';
import { ClearStepPayment, DeleteItem, SaveCart } from '../../redux/userReducer/action-reduce';

function CartUser(props) {
    const listProduct = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataCartItem())
        dispatch(ClearStepPayment())
    }, [dispatch]);
    const handleDeleteItem = (item) => {
        dispatch(deleteItemInCart(item))
        dispatch(DeleteItem(item));
        // console.log(item);
    }
    const clearAllItem = () => {
        const temp = { id: listProduct.cart.id, cart: [] }
        dispatch(clearCartUser(temp))
        dispatch(ClearStepPayment())
    }
    const totalAmount = listProduct.stepPayment.reduce((a, e) => a + e.quantity, 0);
    const totalBill = listProduct.stepPayment.reduce((a, e) => a + e.product_discount * e.quantity, 0);
    return (
        <div className='list'>
            <div className='list-wrap'>
                <ul className="list-product">
                    {listProduct.cart.cart && listProduct.cart.cart.map((goods, index) => (
                        <CartItem goods={goods} key={index} handleDeleteItem={handleDeleteItem} />
                    ))}
                </ul>
                <div className='list-wrap--btn'>
                    <button type='button' onClick={clearAllItem}>Clear All</button>
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
                        <p>{totalAmount}</p>
                    </div>
                    <div>
                        <p>Total: </p>
                        <p>${totalBill.toFixed(2)}</p>
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