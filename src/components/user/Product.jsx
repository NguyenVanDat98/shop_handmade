import React from 'react';
import { ICONSTAR } from '../../Icon';

function Product(props) {
    const { name, img, price, discount, status, sold, rating, } = props;
    return (
        <div className="product" >
            <img src={img} className="product__img" alt="product-top" />
            <span>-{discount}</span>
            <div className="product__body">
                <div className='product-info'>
                    <h5 className="product-info__title">{name}</h5>
                    <p className="product-info__price">$ {price}</p>
                </div>
                <div className='product-rate'>
                    <p className="product-rate__text">
                        <i className={ICONSTAR}></i>
                        {rating}
                    </p>
                    <p className='product-rate__amount'>{sold} Sold</p>
                </div>
                <div className='product-btn'>
                    <button type="submit" className='product-btn__add'>Details</button>
                </div>
            </div>
        </div>
    );
}

export default Product;