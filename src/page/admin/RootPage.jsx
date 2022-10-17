import React from "react";
import { useDispatch } from 'react-redux';
import HeaderAd from "../../components/admin/HeaderAd";
import BodyAd from "../../components/admin/BodyAd";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataProduct, GetInfomationUser, GetListOrder, GetRatingsTotal, GetSlideShow } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { useState } from "react";

const  RootPage = (props) => {
  const pageSearch= ["/admin/dashboard"]
  const dispatch = useDispatch()
  const locale = useLocation()
  const [search , setSearch ]=useState(true);
      useEffect(()=>{
        if(pageSearch.includes(locale.pathname)){
          setSearch(false)
        }else{
          setSearch(true)
        }
          
      },[locale.pathname]);
  useEffect(()=>{
    dispatch(fetchDataProduct());
    dispatch(GetInfomationUser());
    dispatch(GetListOrder("",false))
    dispatch(GetSlideShow())
    dispatch(GetRatingsTotal());
  },[dispatch]);
  return (
    <>
      <HeaderAd search={!pageSearch.includes(locale.pathname) }/>
      <BodyAd>
      <Outlet/>
     </BodyAd>
    </>
  );
};
export default RootPage;
