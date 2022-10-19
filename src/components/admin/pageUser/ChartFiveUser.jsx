import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { ICONUSER } from "../../../Icon";
import { selectItemUser } from "../../../redux/adminReducer/adminAction";

const ItemTopUser = ({ No, seClose, data }) => {
  const dispatch = useDispatch()

  const { profile, payment, acc } = data;
  return (
    <div
      onClick={() =>{
        dispatch(selectItemUser(data))
         seClose()
        }}
      className="item-user-top"
      style={{ "--disdelay": `0.${No}5s` }}
    >
      <div className="avatar">
        <div className="aaa"></div>
        <span className={ICONUSER}></span>
      </div>
      <strong>
        {No + 1}. {profile.first_name + " " + profile.last_name}
      </strong>
      <strong>$ {payment.total}</strong>
    </div>
  );
};

const ChartFiveUser = ({ handleClose, close }) => {
  const dataRatings = useSelector((state) => state.adminData.ratings);
  const isName = (param)=> dataRatings.profile.find((el) => el.id === param)
  return (
    <>
      {close && (
        <div className={`top-users ${close ? "moduleIN" : ""}`}>
          <h3>TOP MEMBER</h3>
          {dataRatings.payment &&
            dataRatings.payment.map((e, i) => (
              <ItemTopUser
                data={{
                  payment: dataRatings.payment[i],
                  profile: isName(e.profile_id),
                  acc: dataRatings.acc[i]
                }}
                key={i}
                seClose={handleClose}
                No={i}
              />
            ))}
        </div>
      )}
    </>
  );
};
export default ChartFiveUser;
