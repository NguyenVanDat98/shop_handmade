import React from "react";
import { ICONSTAR } from "../../Icon";

const ItemProductAd = ({linkImg,nameProduct,category,price,sold,rating,discount}) => {
  return (
    <div className="list-product-Ad_body_item  ">
      <div className="product-item-img">
      <img src={linkImg} />

      </div>
      <section>
        <h6>Name : <span>  {nameProduct}</span></h6>    
        <h6>Price :<span> $ {price}</span> </h6>         
        <h6>Rating :<span>{rating}<i style={{"--current": `${rating*2*10}%`}} className={ICONSTAR}></i> </span> </h6>         
        <h6>Category : <span>{category}</span></h6>          
        <h6>Status : <span>a</span> </h6>          
        <h6>Discount :<span>{discount}</span> </h6>          
        <h6>Sold : <span>{sold}</span> </h6>         
      </section>
    </div>
  );
};

export default ItemProductAd;
