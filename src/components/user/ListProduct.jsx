import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetListProduct, fillCategory } from '../../redux/thunk/actionThunk.js';
import { Product, Sort, Filter } from '../index.js';
import ItemNotFound from './ItemNotFound.jsx';

function ListProduct() {
    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.users.listProduct);
    const listCategory = useSelector((state) => state.users.listCate.data);
    const isLoad = useSelector((state) => state.users.isLoadmore);
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(4);
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(fetListProduct({ limit: limit, sort: sort, filter: filter, page: page }));
    }, [sort, limit, filter, page, dispatch]);
    const checkListproducts = () => {
        let products = listProduct || null;
        return (products !== null && products.length)
    }
    const stylebutton = {
        marginRight: "40px",
        border: "none",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "#fff",
        boxShadow: "4px 4px 8px #ccc",
        fontWeight: 500,
        outline: "none",
        textTransform: "capitalize",
    }
    const getCategory = (e) => {
        const cate = e.target.value;
        dispatch(fillCategory({ limit: limit, sort: sort, filter: filter, page: page, category: cate }))
    }
    return (
        <>
            <div className='feature-filter d-flex justify-content-end ' style={{ paddingRight: "30px" }}  >
                <div>
                    <select style={stylebutton} onChange={getCategory}>
                        <option value="" style={{ fontWeight: 500 }}>Category</option>
                        {listCategory && listCategory.map((item, i) => (
                            <option value={item} key={i} style={{ textTransform: "capitalize", fontWeight: 500 }}>{item}</option>
                        ))}
                    </select>
                </div>
                <Filter handleChangeValueFilter={(e) => {
                    setFilter(e.target.value)
                }} />
                <Sort handleChangeValueSort={(e) => {
                    setSort(e.target.value)
                }} />
                {checkListproducts === false || checkListproducts === 0 ? <ItemNotFound /> : ""}
            </div>
            <div className='body'>
                <ul className='list-item'>
                    {listProduct.length > 0 && listProduct.map((e, i) => (
                        <Link to={`detail/${e.id}`} key={i}>
                            <Product
                                key={e}
                                item={e}
                                img={e.img}
                                rating={e.rating}
                                discount={e.discount}
                                sold={e.sold}
                                status={e.status}
                                name={e.name}
                                price={e.price}
                                category={e.category} />
                        </Link>
                    ))}
                </ul>
                {isLoad && (<div className="loading">
                    <button onClick={() => {
                        setPage((page) => page + 1)
                        setLimit((limit) => limit + 4)
                    }} className="loading__btn">Load More</button>
                </div>)}
            </div>
        </>
    );
}

export default ListProduct;