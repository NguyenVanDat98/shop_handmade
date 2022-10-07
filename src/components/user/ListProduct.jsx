import React from 'react';
import { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Product } from '../index.js';

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
                {listItem.length > 0 && listItem.map((e) => (
                    <Link to={`/${e.id}`}>
                        <Product
                            key={e}
                            item={e}
                            img={e.img}
                            rating={e.rating}
                            discount={e.discount}
                            sold={e.sold}
                            status={e.status}
                            name={e.name}
                            price={e.price} />
                    </Link>
                ))}
            </ul>
            <div className="loading">
                <button className="loading__btn">Load More</button>
            </div>
        </div>
    );
}

export default ListProduct;