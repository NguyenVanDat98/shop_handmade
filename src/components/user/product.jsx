import React from 'react';
import { IconStar } from '../../Icon';

function Product({ item }) {
    return (
        <div className="product" key={item.id}>
            <img src={item.img} className="product__img" alt="product-top" />
            <span>-{item.discount}</span>
            <div className="product__body">
                <div className='product-info'>
                    <h5 className="product-info__title">{item.name}</h5>
                    <p className="product-info__price">$ {item.price}</p>
                </div>
                <div className='product-rate'>
                    <p className="product-rate__text">
                        <i className={IconStar}></i>
                        {item.rating}
                    </p>
                    <p className='product-rate__amount'>{item.sold} Sold</p>
                </div>
                <div className='product-btn'>
                    <button type="submit" className='product-btn__add'>Details</button>
                </div>
            </div>
        </div>
    );
}

export default Product;