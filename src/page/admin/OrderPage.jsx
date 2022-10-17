import React from "react";
import {  useSelector } from 'react-redux';
import ItemOrder from "../../components/admin/itemOrder/ItemOrder";

const OrderPage = (props) => {
    const dataList= useSelector(state=>state.adminData.listOrder)
  return (
      <div className="orderPage">
        {/* {list Order UI} */}
        <div>
          <header>
            <h5>List Order</h5>
          </header>
          <div className="content_page">
              {dataList&&dataList.map((_,i)=> _.status&& <ItemOrder delay={i} data={_} key={_.id+10} />)}
          </div>
        </div>
        {/* {list Paymaent UI} */}
        <div>
          <header>
            <h5>List Payment</h5>
          </header>
          <div className="content_page">
          {dataList&&dataList.map((_,i)=> !_.status && <ItemOrder delay={i} data={_} status={_.status}  key={_.id} />)}
          </div>
        </div>
      </div>
  );
};

export default OrderPage;
