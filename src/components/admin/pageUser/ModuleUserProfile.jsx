import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ICONCLOSE, ICONUSER } from '../../../Icon';
import { GetListOrder } from '../../../redux/adminReducer/actionThunkAd/actionThunk';

const ModuleUserProfile = memo(({ displayModule, onClick }) => {
    const [status , setStatus ]=useState(false);
    const listOrder = useSelector((state)=>state.adminData.historyOrder)
    const ItemSelect = useSelector((state)=>state.adminData.ItemDataSelect)
    const dispatch = useDispatch()
    const {acc,profile,payment}=ItemSelect
    useEffect(()=>{
        dispatch(GetListOrder(profile.id))
    },[profile,dispatch]);
    return (
      <div className={`${displayModule} module-profile `}  >
        <div className="header-module">
        <div className="header-module-avt m-3">
          <i className={ICONUSER}></i>
        </div>
        <div className="header-module-title">
          <h6>{profile.fullname ? profile.fullname : "unknown name"}</h6>
          <h6>Email: <span>{profile.email}</span>  </h6>
          <h6>Telephone:  <span>{acc.telephone}</span></h6>
          <h6>Address:  <span> {profile.address}</span></h6>
        </div>
      </div>

      <div className="profileItem">
        <i onClick={() => { onClick() }} className={ICONCLOSE}></i>

        <h6>Total : <span> $ {payment.total} <span style={{ background: "red", borderRadius: "20px", padding: "0 5px" }}> VIP</span></span></h6>
        {/* <h6>Member Type : <span style={{ background: "red", borderRadius: "20px", padding: "0 5px" }}> VIP</span></h6> */}
        <h6>Description :</h6>
        <p>      Lorem, .</p>

      </div>
      <div className="control">
        {
          !status ? <button onClick={() => setStatus(true)} className="btn btn-danger"> Remove user</button> : <div className={`check-delete`}>
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
          {listOrder && listOrder.map((_, i) =>
            <div key={i} className="item-order">
              <h6 className="time_making"> {_.time__create}</h6>
              <section>
                {_.list_product_order && _.list_product_order.map((_, i) => <details key={i}>
                  <summary>
                    <h6>{_.name_product} <span> {_.price}</span></h6>
                  </summary>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid quae explicabo quidem consequatur, quibusdam sed at quas? Non laboriosam deserunt nulla aut vel facilis itaque neque magnam corrupti? Hic?
                  </p>
                </details>)}


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