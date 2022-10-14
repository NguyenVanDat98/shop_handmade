import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import RootPage from "./RootPage";
import { GetListOrder } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import ItemOrder from "../../components/admin/itemOrder/ItemOrder";

const OrderPage = (props) => {
    const dispatch = useDispatch()
    const dataList= useSelector(state=>state.adminData.listOrder)
    useEffect(()=>{ 
        dispatch(GetListOrder("",false))
    },[dispatch]);

  return (
    <RootPage>
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
    </RootPage>
  );
};

export default OrderPage;
