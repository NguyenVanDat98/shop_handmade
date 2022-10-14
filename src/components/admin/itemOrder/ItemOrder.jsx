import { useDispatch } from 'react-redux';
import { UpdateStatus } from '../../../redux/adminReducer/actionThunkAd/actionThunk';
const ItemOrder = ({ data, status,delay }) => {
    const dispatch = useDispatch()
const dayNow = new Date(Date.now())


const changeStatus =()=>{
    const txt = `${dayNow.getDate()}-${dayNow.getMonth()+1}-${dayNow.getFullYear()}`
    dispatch(UpdateStatus(data,txt))
  }
  return (
    <>
      {data && (
        <details style={{"--delay": `${delay/10}s`}}>
          <summary>
            {status?
            <button className={`btn btn-primary`} onClick={changeStatus} >{"Done"}</button>    :        
            <button className={`btn btn-success`} onClick={changeStatus} >{"Change"}</button>            
            
        }
            <section>
              <h5>
                <span>Create:</span> {data.time__create}
              </h5>
              {!status && (
                <h5>
                  {" "}
                  <span>Complete:</span> {data.time_complete}
                </h5>
              )}
            </section>
            <div>
              <h6>
                {`Product Count:`}
                <span>{data.list_product_order.length}</span>
              </h6>
              <h6>
                {`Total Order:`}
                <span>{data.total_order}</span>
              </h6>
            </div>
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
