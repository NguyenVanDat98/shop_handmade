import React from "react";
import { Link } from "react-router-dom";
import { ICONHOME, ICONUSER } from "../../Icon";

const ProfilePage = (props) => {
  return (
    <div className="page-profile">
      <div className="bg-profile">
        <Link to="/admin/Dashboard">
          <i className={ICONHOME}></i>
        </Link>
        <div className="avt-admin">
          <i className={ICONUSER}></i>
        </div>
      </div>
      <div className="body-profile"></div>
    </div>
  );
};

export default ProfilePage;
