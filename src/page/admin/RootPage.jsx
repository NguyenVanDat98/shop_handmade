import React from "react";
import HeaderAd from "../../components/admin/HeaderAd";
import BodyAd from "../../components/admin/BodyAd";

const  RootPage = ({children,search}) => {
  return (
    <div>
      <HeaderAd search={search}/>
     <BodyAd>
      {children}
     </BodyAd>
    </div>
  );
};
export default RootPage;
