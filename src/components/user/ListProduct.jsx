import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetListProduct } from '../../redux/thunk/actionThunk.js';
import { Product, Sort, Filter } from '../index.js';

function ListProduct(props) {
    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.users.listProduct);
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(4);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        dispatch(fetListProduct({ limit: limit, sort: sort, filter: filter }))
    }, [sort, limit, filter]);

    return (
        <>
            <div className='feature-filter d-flex justify-content-end ' style={{ paddingRight: "30px" }}  >
                <Filter handleChangeValueFilter={(e) => setFilter(e.target.value)} />
                <Sort handleChangeValueSort={(e) => setSort(e.target.value)} />
            </div>
            <div className='body'>
                <ul className='list-item'>
                    {listProduct.length > 0 && listProduct.map((e) => (
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
                    <button onClick={() => setLimit((limit) => limit + 4)} className="loading__btn">Load More</button>
                </div>
            </div>
        </>
    );
}

export default ListProduct;