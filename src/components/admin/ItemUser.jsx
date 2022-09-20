import React, { useState } from "react";

const ItemUser = (props) => {
  const [status, setStatus] = useState(true);
  return (
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      {status ? (
        <td className="btnUser">
          <button onClick={() => setStatus(false)}> x</button>
        </td>
      ) : (
        <td className="btnUser">
          <button className="allow" onClick={() => setStatus(true)}><i class="fa-solid fa-check"></i></button>
          <button className="delete" onClick={() => setStatus(true)}><i class="fa-sharp fa-solid fa-ban"></i></button>
        </td>
      )}
    </tr>
  );
};

export default ItemUser;
