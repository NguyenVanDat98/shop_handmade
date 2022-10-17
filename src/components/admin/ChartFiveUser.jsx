import React from "react";
import { useSelector } from "react-redux";
import { ICONUSER } from "../../Icon";

const ItemTopUser = ({ No, seClose, data }) => {
  const { profile, payment } = data;
  return (
    <div
      onClick={() => seClose()}
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
