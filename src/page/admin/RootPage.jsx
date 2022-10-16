import React from "react";
import { useDispatch } from 'react-redux';
import HeaderAd from "../../components/admin/HeaderAd";
import BodyAd from "../../components/admin/BodyAd";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataProduct, GetInfomationUser, GetListOrder } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { useState } from "react";

const  RootPage = (props) => {
      const dispatch = useDispatch()
      const locale = useLocation()
      const [search , setSearch ]=useState(true);
      const pageSearch=["/admin/dashboard"]
      useEffect(()=>{
        if(pageSearch.includes(locale.pathname)){
          setSearch(false)
        }else{
          setSearch(true)
        }
          
      },[locale.pathname]);
      // console.log();
  useEffect(()=>{
    dispatch(fetchDataProduct());
    dispatch(GetInfomationUser());
    dispatch(GetListOrder("",false))
  },[dispatch]);
  return (
    <div>
      <HeaderAd search={search}/>
     <BodyAd>
      <Outlet/>
     </BodyAd>
    </div>
  );
};
export default RootPage;
