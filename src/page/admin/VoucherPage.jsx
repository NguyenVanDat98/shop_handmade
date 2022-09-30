import React from "react";
import { useState } from "react";
import { ListVoucher, SearchAd } from "../../components/";
import RootPage from "./RootPage";

const VoucherPage = (props) => {
  const [check, setCheck] = useState(true);
  return (
    <div>
      <RootPage search={<SearchAd />}>
        <div className="body-voucher">
          <ListVoucher />
          <div className="controler-voucherpage">
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
                  className="fa-solid fa-chevron-left"
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
              <form>
                <h4>CREATE VOUCHER</h4>
                <div className="form-floating">
                  <input
                    className="form-control"
                    autoComplete="off"
                    type="text"
                    id="name"
                  />{" "}
                  <label htmlFor="name">Name </label>{" "}
                </div>
                <div className="form-floating">
                  {" "}
                  <input
                    className="form-control"
                    autoComplete="off"
                    type="text"
                    id="expiry"
                  />{" "}
                  <label htmlFor="expiry">Expiry </label>
                </div>
                <div className="form-floating">
                  {" "}
                  <input
                    className="form-control"
                    autoComplete="off"
                    type="text"
                    id="code"
                  />
                  <label htmlFor="code">Code </label>{" "}
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    autoComplete="off"
                    type="text"
                    id="discount"
                  />{" "}
                  <label htmlFor="discount">Discount </label>{" "}
                </div>
                <div className="form-floating">
                  <textarea className="form-control" cols={24} id="detail" />{" "}
                  <label htmlFor="detail">Detail </label>{" "}
                </div>
                <button className="btn btn-success">CREATE</button>
              </form>
            )}
          </div>
        </div>
      </RootPage>
    </div>
  );
};

export default VoucherPage;
