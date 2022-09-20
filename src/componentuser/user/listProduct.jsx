import React from 'react';
import { useCallback, useEffect, useState } from "react";
import Product from './product';
ListProduct.propTypes = {

};

function ListProduct(props) {
    const URL = "http://localhost:8000/listProduct";
    const [listItem, setListItem] = useState([]);
    const fetchData = useCallback(async () => {
        await fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setListItem(data);
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);
    // useEffect(() => {

    // }, [listItem])
    return (
        <div className='body'>
            <p className='total-item'> Total: {listItem.length} Product</p>
            <ul className='list-item'>
                {listItem.length > 0 && listItem.map((item, index) => (
                    <Product key={index} item={item} listItem={listItem} />
                ))}
            </ul>
        </div>

    );
}

export default ListProduct;