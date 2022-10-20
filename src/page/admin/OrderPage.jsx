import React from "react";
import { useState } from "react";
import {  useSelector } from 'react-redux';
import ItemOrder from "../../components/admin/itemOrder/ItemOrder";

const OrderPage = (props) => {
    const dataList= useSelector(state=>state.adminData.listOrder)
   const  [edit,setEdit]=useState({
    order: false,
    payment: false,
   })
  return (
      <div className="orderPage">
        {/* {list Order UI} */}
        <div className="page-list-order">
          <header>
            <h5>List Order</h5>
            <button onClick={()=>setEdit({...edit, order:!edit.order })}>Edit</button>
          </header>
          <div className="content_page">
              {dataList&&dataList.map((_,i)=> _.status&& <ItemOrder edit={edit.order} delay={i} data={_} key={_.id+10} />)}
          </div>
        </div>
        {/* {list Paymaent UI} */}
        <div>
          <header>
            <h5>List Payment</h5>
            <button onClick={()=>setEdit({...edit , payment : !edit.payment })}>Edit</button>
          </header>
          <div className="content_page">
          {dataList&&dataList.map((_,i)=> !_.status && <ItemOrder delay={i} edit={ edit.payment } data={_} status={_.status}  key={_.id} />)}
          </div>
        </div>
      </div>
  );
};

export default OrderPage;
