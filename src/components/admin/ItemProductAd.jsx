import React from "react";

const DISPLAY_ITEM = "d-flex justify-content-between"

const ItemProductAd = (props) => {
  return (
    <div className="list-product-Ad_body_item  ">
      <img src="" alt="" />
      <section>
        <p>Name :as dasdas da sdaf  asdasdas dasd asda sdaw sda</p>
        <div className={DISPLAY_ITEM}> 
        <p>Price :</p> 
        <p>1</p>
        </div>
        <div className={DISPLAY_ITEM}>
        <p>Category : </p>
          <p>a</p>
        </div>
        <div className={DISPLAY_ITEM} style={{backgroundColor: "green"}}>
        <p>Status : </p>
          <p>a</p>
        </div>
        <div className={DISPLAY_ITEM} style={{backgroundColor:"orange"}}>
        <p>Discount : </p>
          <p>a</p>
        </div>
        <div className={DISPLAY_ITEM } style={{backgroundColor: "blue"}}>
        <p>Sold : </p>
          <p>a</p>
        </div>
      </section>
    </div>
  );
};

export default ItemProductAd;
