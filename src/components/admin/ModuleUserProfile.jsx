import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ICONCLOSE, ICONUSER } from '../../Icon';
import { GetListOrder } from '../../redux/adminReducer/actionThunkAd/actionThunk';


const ModuleUserProfile = memo(({ displayModule, onClick, data }) => {
    const [status , setStatus ]=useState(false);
    console.log(data);
    const dispatch = useDispatch()
    const {acc,profile,payment}=data
    useEffect(()=>{
        dispatch(GetListOrder(payment.cart_order))
    },[]);


    return (
      <div className={`module-profile ${displayModule}`}  >
        <div className="header-module">
        <div className="header-module-avt m-3">
          <i className={ICONUSER}></i>
        </div>
      <div className="header-module-title">
         <h6>{profile.first_name} </h6>
          <h6>Email: <span>{profile.email}</span>  </h6>
          <h6>Telephone:  <span>{acc.telephone}</span></h6>
          <h6>Address:  <span> {profile.address}</span></h6>
      </div>
        </div>
        
        <div className="profile">
          <i onClick={() => { onClick() }} className={ICONCLOSE}></i>
         
          <h6>Total : <span> $ {payment.total} <span style={{ background: "red", borderRadius: "20px", padding: "0 5px" }}> VIP</span></span></h6>
          {/* <h6>Member Type : <span style={{ background: "red", borderRadius: "20px", padding: "0 5px" }}> VIP</span></h6> */}
          <h6>Description :</h6>
          <p>      Lorem, .</p>
  
        </div>
        <div className="control">
          {
           !status ? <button onClick={() => setStatus(true)} className="btn btn-danger"> Remove user</button> :<div className={`check-delete`}>
            <span>You sure ?</span>
             <button className=" btn btn-primary allow" onClick={() => setStatus(false)}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button className=" btn btn-danger cancer" onClick={() => setStatus(false)}>
              <i className="fa-sharp fa-solid fa-ban"></i>
            </button>
            </div>
          }
        </div>
        <details className="history-order">
          <summary> View more history Order</summary>
          <div> 
            {[...new Array(3)].map((_,i)=>
             <div key={i} className="item-order">
               <h6 className="time_making"> 12-12-2222 </h6>
               <section>
                {[...new Array(3)].map((_,i)=> <details key={i}>
                  <summary>
                    <h6> name <span> {`<price>`}</span></h6>
                  </summary>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid quae explicabo quidem consequatur, quibusdam sed at quas? Non laboriosam deserunt nulla aut vel facilis itaque neque magnam corrupti? Hic?
                  </p>
                </details> )}
               
                
               </section>
            </div>
            )}
           
           </div>
        </details>
      </div>
    )
  })
  ModuleUserProfile.defaultProps = {
    displayModule: "moduleIN"
  }

export default ModuleUserProfile;