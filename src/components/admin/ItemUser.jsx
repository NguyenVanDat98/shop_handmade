import React, { useState } from "react";

const ItemUser = ({No}) => {
  const [status, setStatus] = useState(true);
  return (
    <div className="itemUser">
      <p>{No}</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      {status ? (
        <p className="btnUser">
          <button onClick={() => setStatus(false)}> x</button>
        </p>
      ) : (
        <p className="btnUser">
          <button className="allow" onClick={() => setStatus(true)}><i className="fa-solid fa-check"></i></button>
          <button className="delete" onClick={() => setStatus(true)}><i className="fa-sharp fa-solid fa-ban"></i></button>
        </p>
      )}
    </div>
  );
};

export default ItemUser;
