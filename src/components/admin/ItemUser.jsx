import React, { useState } from "react";
import { ICONTRASH, ICONUSER } from "../../Icon";

const ItemUser = ({ No,onClick }) => {
  const [status, setStatus] = useState(true);
  const linkuser=""
  return (
    <div onClick={onClick} className="itemUser">
      <p>{No}</p>
      <div className="user-avt">
        {linkuser!=="" ? <img src="" alt="avt" />:<i className={ICONUSER} ></i> }        
      </div>
      <div className="info">
        <p>Name sadf asd asd asd</p>
        <p>(+84)0905450804</p>
      </div>

      <p>Description</p>
      <div className="total-money">
        <p>Total</p>
      <p>member</p>
      </div>
      
      <div className="control">
        {
          status ? <button  className="delete-user btn btn-close-white" onClick={() => setStatus(false)}> <i className={ICONTRASH}></i></button>: <div className={`check-delete`}>
           <button className="allow btn btn-primary" onClick={() => setStatus(true)}>
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="cancer btn btn-danger" onClick={() => setStatus(true)}>
            <i className="fa-sharp fa-solid fa-ban"></i>
          </button>
          </div>
        }
        
      </div>
      
    </div>
  );
};

export default ItemUser;
