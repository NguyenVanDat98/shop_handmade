import React from "react";
import { useState } from "react";
import {  ICONCLOSE, ICONUSER } from "../../Icon/index.js";

import { ItemUser } from "./../index.js";
const ModuleUserProfile =({ displayModule,onClick,style})=>{
    return (
        <div className={`module-profile ${displayModule}`} style={{display:style}} >
            <div className="avt m-3">
                <i className={ICONUSER}></i>
            </div>
            <div className="profile">
                <i onClick={()=>{onClick()}} className={ICONCLOSE}></i>
                <h6>Name asd asd </h6>
                <h6>Email: <span>@gmail.com</span>  </h6>
                <h6>Telephone:  <span> 0905450804</span></h6>
                <h6>Total : <span> $5654</span></h6>
                <h6>Member Type : <span style={{background : "red", borderRadius:"20px" , padding : "0 5px" }}> VIP</span></h6>
                <h6>Description :</h6>
                <p>      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit totam sint pariatur consectetur in natus, cumque velit eos eveniet quos est dignissimos laboriosam dolores aut necessitatibus vero cum ratione unde.</p>
                
            </div>
        </div>
    )
}
const ItemTop=({No,seClose})=>{
    return(        
        <div onClick={seClose} className="item-user-top" style={{"--disdelay": `0.${No}5s`}}>
          <div className="avatar">
            <div className="aaa"></div>
            <span className={ICONUSER}></span>
          </div>          
            <strong>
                {No+1}. Name
            </strong>
            <strong>
                $ 25682
            </strong>
        </div>     
    )
}

const ListUser = (props) => {
    const [close ,setClose]= useState("")
  return (
    <div className="content-listuser">
      <div className="listUser viewFirst">
        <div className="listUser-header">
          <h3>List User</h3>
        </div>
        <div className="body-listUser">
          {[...new Array(30)].map((_, i) => (
            <ItemUser onClick={()=>{setClose("moduleIN")}}  No={i+1} />
          ))}
        </div>
      </div>
      <div className="empty"></div>
      <div className={`top-users ${close=="" ?" ": close=="moduleOUT"?"moduleIN" :"moduleOUT"}`} style={{"--diss":close===""||close==="moduleOUT"?"block": "none"}} >      
        <h3>TOP MEMBER</h3>
        { [...new Array(5)].map((e,i)=><ItemTop seClose={()=>{setClose("moduleIN")}} No={i}/>)}       
      </div>
       <ModuleUserProfile style={close==""? "none": close==="moduleIN"?"flex": "none" } onClick={()=>{setClose("moduleOUT")}}  displayModule={close}/>       
    </div>
  );
};

export default ListUser;
