import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { ICONTRASH } from '../../Icon';

function CartUser(props) {
    const URL = "http://localhost:8000/listProduct";
    const [listProduct, setListProduct] = useState([]);
    const fetchData = useCallback(async () => {
        await fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setListProduct(data);
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);
    return (
        <div>
            <ul className="list-product">
                {listProduct.length > 0 && listProduct.map((goods, index) => (
                    <li key={index} className="list-product__add">
                        <div className='list-product__detail'>
                            <div>
                                <input type="checkbox" />
                                <img src={goods.img} alt={goods.name} />
                            </div>
                            <div>
                                <p>{goods.name}</p>
                                <p>{goods.description}</p>
                            </div>
                        </div>
                        <div>
                            <p>${goods.price}</p>
                            <i className={ICONTRASH}></i>
                        </div>
                    </li>
                ))}
                <div className='list-product__btn'>
                    <button type='button'>Clear All</button>
                </div>
            </ul>

        </div>
    );
}

export default CartUser;