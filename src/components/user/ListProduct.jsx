import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { Product } from '../index.js';
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


    return (
        <div className='body'>
            <ul className='list-item'>
                {listItem.length > 0 && listItem.map((item, index) => (
                    <Product key={index} item={item} listItem={listItem} />
                ))}
            </ul>
            <div className="loading">
                <button className="loading__btn">Load More</button>
            </div>
        </div>
    );
}

export default ListProduct;