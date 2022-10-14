import React from "react";
import { useEffect, useCallback } from "react";
import { getAccount } from "../../../api/apiMethod.js";
import { useState } from "react";

import {
  Header,
  BodyUser,
  FooterUser,
  AccountUser,
  Text,
} from "../../../components/index.js";
import { Outlet, useLocation } from "react-router-dom";

const Pageroot = (props) => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const infoUser = JSON.parse(localStorage.getItem("infoAccount"));
  const param = useLocation();
  const pathCart = ["/cart", "/payment", "/profileuser"];
  const pathSearch = ["/", "/cart"];
  const fetAccount = useCallback(() => {
    if (infoUser !== null) {
      getAccount(`?id=${infoUser.id}`)
        .then((res) => res.status === 200 && res.json())
        .then((res) => setData(res[0]));
    }
  }, [infoUser]);
  useEffect(() => {
    fetAccount();
  }, [fetAccount]);
  useEffect(() => {
    if (data.length !== 0) {
      if (data.id === infoUser.id) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  }, [data, infoUser]);

  return (
    <div>
      <Header
        search={
          (param.pathname.includes("/detail") && true) ||
         ( pathSearch.includes(param.pathname)
            ? true
            : false)
        }
        cart={pathCart.includes(param.pathname) ? false : true}
      >
        {check ? <AccountUser namee={infoUser.userName} /> : <Text />}{" "}
      </Header>
      <BodyUser>
        <Outlet />
      </BodyUser>

      <FooterUser />
    </div>
  );
};

export default Pageroot;
