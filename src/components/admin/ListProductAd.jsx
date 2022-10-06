import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ICONADD, ICONCLOSE } from "../../Icon";
import { ItemProductAd } from "./../index.js";

const ListProductAd = (props) => {
  const [disForm, setDisForm] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  const fetchData = useCallback(() => {
    try {
      fetch("http://localhost:8000/listProduct")
        .then((res) => res.json())
        .then((res) => setData(res));
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChangeSort = (e) => {
    const temp = rootData.filter((item) => item.name === e.target.value);
    temp.length ? setNewData(temp) : setNewData(rootData);
  };

  let listCategory = useMemo(() => {
    let arr = [];
    for (const key in data) {
      if (!arr.includes(data[key].category.toLowerCase())) {
        arr.push(data[key].category.toLowerCase());
      }
    }
    return arr;
  }, [data]);
  const rootData = useMemo(() =>
      listCategory.map((e, i) => {
        return {
          name: e,
          data: data.filter((el) => el.category.toLowerCase() === e),
        };
      }),
    [data]
  );
  useEffect(() => {
    setNewData(rootData);
  }, [rootData]);

  return (
    <div className="list-product-Ad viewFirst ">
      <div className={`module-create-product  ${disForm}`}>
        <i onClick={() => setDisForm("disFalse")} className={ICONCLOSE}></i>{" "}
        <span> Create product</span>
        <form className="d-flex flex-column ">
          <div className="form-floating">
            <input
              className="form-control"
              autoComplete="off"
              type="text"
              id="nameProduct"
            />{" "}
            <label htmlFor="nameProduct">Name product </label>{" "}
          </div>
          <div className="form-floating">
            <input
              className="form-control"
              autoComplete="off"
              type="text"
              id="price"
            />{" "}
            <label htmlFor="price">Price </label>{" "}
          </div>
          <div className="form-floating">
            <input
              className="form-control"
              autoComplete="off"
              type="text"
              id="category"
            />{" "}
            <label htmlFor="category">Category </label>{" "}
          </div>
          <div className="form-floating">
            <input
              className="form-control"
              autoComplete="off"
              type="text"
              id="image"
            />{" "}
            <label htmlFor="img">Img link </label>{" "}
          </div>
          <button type="button" className="btn btn-primary">
            ADD
          </button>
        </form>
      </div>
      <div className="main-list">
        <div className="list-product-Ad_header">
          <button onClick={() => setDisForm("disTrue")}>
            <i className={ICONADD}> </i> ADD PRODUCT
          </button>
          <select
            onChange={(e) => handleChangeSort(e)}
            className="form-select"
            name=""
          >
            <option defaultValue>ALL CATEGORY</option>
            {listCategory &&
              listCategory.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
          </select>
        </div>
        {newData &&
          newData.map((e, i) => {
            return (
              <div key={i} className="list-allProduct">
                <span> {e.name}</span>
                <div className="main-content-list-product ">
                  {e.data.map((item, i) => (
                    <ItemProductAd linkImg={item.img} sold={item.sold} price={item.price} category={item.category} nameProduct={item.name} rating={item.rating} discount={item.discount} key={i} />
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListProductAd;
