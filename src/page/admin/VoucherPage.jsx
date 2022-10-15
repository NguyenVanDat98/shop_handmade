import React from "react";
import { useState } from "react";
import { ListVoucher, SearchAd } from "../../components";
import FormCreateVoucher from "../../components/admin/voucherPage/FormCreateVoucher";
import { ICONBACK } from "../../Icon";
import RootPage from "./RootPage";

const VoucherPage = (props) => {
  const [check, setCheck] = useState(true);
  return (
    <div>
      <RootPage search={<SearchAd />}>
        <div className="body-voucher body-padding-15 ">
          <ListVoucher />
          <div className="controler-voucherpage ">
            <div className="header-controler">
              {check && (
                <button
                  className="btn btn-primary"
                  onClick={() => setCheck(false)}
                >
                  ADD VOUCHER
                </button>
              )}
              {!check && (
                <i
                  onClick={() => setCheck(true)}
                  className={ICONBACK}
                ></i>
              )}
            </div>
            {check && (
              <section>
                <h4>VIEW DETAIL </h4>
                <div>
                  <strong>Name : </strong>
                  <span>2</span>{" "}
                </div>
                <div>
                  {" "}
                  <strong>Expiry : </strong>
                  <span>3</span>{" "}
                </div>
                <div>
                  {" "}
                  <strong>Code : </strong>
                  <span>4</span>
                </div>
                <div>
                  {" "}
                  <strong>Discount : </strong>
                  <span>5</span>
                </div>

                <p>
                  Detail : &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis sunt porro esse omnis.
                  Provident minus maxime ducimus sequi deserunt tenetur tempore
                  veniam expedita exercitationem. Iure fugiat enim alias
                  repellat earum!{" "}
                </p>
                <p> </p>

                <button className="btn btn-danger"> Delete voucher</button>
              </section>
            )}
            {!check && (
              <FormCreateVoucher/>
            )}
          </div>
        </div>
      </RootPage>
    </div>
  );
};

export default VoucherPage;
