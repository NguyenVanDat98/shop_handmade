import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICONCLOSE } from '../../../Icon';
import { handleDeleteOrder, UpdateStatus } from '../../../redux/adminReducer/actionThunkAd/actionThunk';
import store from '../../../redux/store';
const ItemOrder = ({ data, status,delay ,edit}) => {
    const dispatch = useDispatch()
const dayNow = new Date(Date.now())
const {acc,profile} = useSelector(_=>_.adminData.infomationUser)
const filterdata = useMemo(()=>{
  // console.log(acc);
   const teleAcc =  acc ? acc.find(_=>_.profile_id===data.profile_id):{telephone:"",username:''}
   const fullName = profile ? profile.find(_=>_.id===data.profile_id):{fullname:"",address:""}

   return {telephone : teleAcc.telephone,username : teleAcc.user_name,fullname:fullName.fullname, address : fullName.address}

},[acc,profile])
useEffect(()=>{
  console.log(filterdata);
},[filterdata])
const changeStatus =()=>{
    const txt = `${dayNow.getDate()}-${dayNow.getMonth()+1}-${dayNow.getFullYear()}`
    dispatch(UpdateStatus(data,txt))
  }

  const deleteOrder = (item)=>{
   dispatch(handleDeleteOrder(item))
  }
  return (
    <>
      {data && (
        <details className='item-order' style={{"--delay": `${delay/10}s`}}>
          <summary>
            {status?
              <button className={`btn btn-primary`} onClick={changeStatus} >{"Accept"}</button>    :        
             (edit && <button className={`btn btn-success`} onClick={changeStatus} >{"Change"}</button> )   
            }
            <section>
            
                <h5>Create: <strong> {data.time__create}</strong></h5> 
              {!status && ( <h5>Complete:  <strong>{data.time_complete} </strong></h5>)}
                
                <h5>Name: <strong>{filterdata.fullname||filterdata.username} </strong></h5> 
                <h5>Telephone: <strong> {filterdata.telephone}</strong></h5> 
                <h5>Address: <strong>{filterdata.address} </strong></h5> 
             
            </section>
            <div>
              <h6>
                {`Product Count:  `}
                <span>{data.list_product_order.length}</span>
              </h6>
              <h6>
                {`Total Order: `}
                <span>  {data.total_order}</span>
              </h6>
            </div>
           {edit && <button  onClick={()=>deleteOrder(data.id)}><i className={ICONCLOSE}></i> </button>}
            
          </summary>
          {data.list_product_order &&
            data.list_product_order.map((_, i) => (
              <ul key={i}>
                <li>
                  name : <span>{_.name_product}</span>
                </li>                
                <li>
                  discount:<span>{_.discount}</span>{" "}
                </li>
                <li>
                  quantity: <span>{_.quantity}</span>
                </li>
                <li>
                  price : <span>$ {_.price}</span>{" "}
                </li>
              </ul>
            ))}
        </details>
      )}
    </>
  );
};
ItemOrder.defaultProps = {
  status: true,
};
export default ItemOrder;
