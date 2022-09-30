import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { ICONMINUS, ICONPLUS, ICONTRASH } from '../../Icon';

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
        <div style={{ display: "flex" }}>
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
                        <div>
                            <button><i className={ICONMINUS}></i></button>
                            <span>1</span>
                            <button><i className={ICONPLUS}></i></button>
                        </div>
                    </li>
                ))}
                <div className='list-product__btn'>
                    <button type='button'>Clear All</button>
                </div>
            </ul>
            <div className='list-selection'>
                <div className='list-goods'>
                    <div className='list-goods__item'>
                        <img src="https://img.alicdn.com/imgextra/i1/201255257/TB29H7DAUdnpuFjSZPhXXbChpXa_!!201255257.jpg" alt="" />
                        <div>
                            <div>
                                <p>Boat</p>
                                <p>Decoration</p>
                            </div>
                            <div>
                                <p>$20</p>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                    <div className='list-goods__item'>
                        <img src="https://img.alicdn.com/imgextra/i1/201255257/TB2czvEj9B0XKJjSZFsXXaxfpXa_!!201255257.jpg" alt="" />
                        <div>
                            <div>
                                <p>Rickshaw</p>
                                <p>Decoration</p>
                            </div>
                            <div>
                                <p>$40</p>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
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