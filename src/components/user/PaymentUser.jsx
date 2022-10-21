import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ICONCHECK, ICONCREDIT, ICONWALLET } from "../../Icon";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  FetchListVoucher,
  getProfileUser,
} from "../../redux/thunk/actionThunk";
import { ICONTRUCK } from "./../../Icon/index";
import toast from "react-hot-toast";
import { useMemo } from "react";

const SHIPPING_FEE = 4;
const VOUCHER = 0;
function PaymentUser(props) {
  const [display, setDisplay] = useState(false);
  const [addChoose, setAdd] = useState(null);
  const [VoucherChoose, setVoucherChoose] = useState(null);
  const [show, setShow] = useState(false);
  const [valueVoucher, setVoucher] = useState("");
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.users);
  const [valueF, setValueF] = useState({
    telephone: 0,
    fullname: "",
    email: "",
    address: "",
  });
  const { stepPayment, listProfile, listVoucher } = listProduct;
  const { acc, profile } = listProfile;

  const totalBill = () => {
    if (stepPayment) {
      const _ = stepPayment.reduce((a, e) => a + parseInt(e.quantity), 0);
      const __ = stepPayment.reduce(
        (a, e) => a + parseFloat(e.product_discount) * parseInt(e.quantity),
        0
      );
      return { total: parseFloat(__), amount: parseFloat(_) };
    } else {
      return { total: 0, amount: 0 };
    }
  };
  const TOTAL_BILL = useMemo(() =>  {
    console.log(VoucherChoose.discount);
    return(
      parseFloat(totalBill().total) + (totalBill().total === 0 ? 0 : parseFloat(SHIPPING_FEE)) - (VoucherChoose.discount ? parseInt(VoucherChoose.discount) : 0 )      
    )}
    
    ,[VoucherChoose.discount,totalBill().total])
  const hangdleChangeForm = (e) => {
    setValueF({ ...valueF, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (
      valueF.fullname === "" ||
      valueF.address === "" ||
      valueF.email === "" ||
      valueF.telephone === ""
    ) {
      toast.dismiss();
      toast.error("Please enter your all information!!");
    } else {
      setValueF({
        telephone: 0,
        fullname: "",
        email: "",
        address: "",
      });
      setDisplay(false);
      setArr((s) => [...s, valueF]);
      console.log("sadf");
    }
  };
  const focusVoucher = (e) => {
    e.target.previousSibling.style.display = "block";
  };
  const blurVoucher = (e) => {
    setTimeout(() => {
      e.target.previousSibling.style.display = "none";
    }, 300);
  };

  useEffect(() => {
    dispatch(getProfileUser());
    dispatch(FetchListVoucher());
    window.scroll(0,0)
  }, [dispatch]);

  const validVoucher = () => {
    const check = listVoucher.find((_) => _.code === valueVoucher) || null;

    if (totalBill().total > 10) {
      if (check) {
        console.log(check);
        setVoucherChoose(check);
        toast.success("this Code unvalid!", { position: "top-right" });
      } else {
        toast.error("this Code unvalid!", { position: "top-right" });
      }
    } else {
      toast.error("Total not enough condition!", { position: "top-right" });
    }
  };
  return (
    <>
      <div className="user">
        <div className="user__info">
          <div className="user__info--address">
            {/* {-----------------------------------Shipping Address---------------------------------------------------} */}
            <div className="d-flex justify-content-between align-items-start address-title">
              <p>Shipping Address</p>
              <button onClick={() => setDisplay(true)}>Add address</button>
            </div>
            {/* root profile */}
            {acc && (
              <div className="info-user">
                <button
                  onClick={() =>
                    setAdd({
                      email: profile.email,
                      fullname: profile.fullname,
                      telephone: acc.telephone,
                      address: profile.address,
                    })
                  }
                >
                  Choose
                </button>
                <h5>
                  {profile.fullname}
                  <span>{acc.telephone} </span>{" "}
                </h5>
                <p className="fws-text"> {profile.address}</p>
              </div>
            )}
            {/* temp profile */}
            {arr &&
              arr.map((_, i) => (
                <div className="info-user" key={i}>
                  <button
                    onClick={() => {
                      setAdd(_);
                    }}
                  >
                    Choose
                  </button>
                  <h5>
                    {_.fullname} <span>{_.telephone} </span>{" "}
                  </h5>
                  <p className="fws-text"> {_.address}</p>
                </div>
              ))}
          </div>
          {/* {-----------------------------------List product---------------------------------------------------} */}
          <div className="user__info--cart">
            <p>
              Cart <span>Amount list payment: {totalBill().amount}</span>
            </p>
            {stepPayment &&
              stepPayment.map((item, i) => (
                <div className="user__info--cart--item" key={i} item={item}>
                  <div className="d-flex">
                    <img src={item.product_img} alt="imagee" />
                    <p className="fws-text">{item.product_name}</p>
                  </div>
                  <div>
                    <p className="fws-text">
                      $ {item.product_discount * item.quantity}
                    </p>
                    <p>$ {item.product_price * item.quantity}</p>
                    <p>-{item.product_percent}</p>
                  </div>
                  <p className="fws-text">
                    Quantity: <span className="fws-text">{item.quantity}</span>
                  </p>
                </div>
              ))}
          </div>
        </div>
        {display ? (
          ""
        ) : (
          <div className="user__order">
            <form>
              <div className="user__order--payment">
                <h5>Payment Method</h5>
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <i className={ICONCREDIT}></i>
                    <p>Credit Card</p>
                  </div>
                  <input type="radio" name="choose" disabled />
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <i className={ICONTRUCK}></i>
                    <p>Ship COD</p>
                  </div>
                  <input type="radio" name="choose" checked />
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <i className={ICONWALLET}></i>
                    <p>MOMO Wallet</p>
                  </div>
                  <input type="radio" name="choose" disabled />
                </div>
              </div>
              <div className="user__order--info">
                <div className="user__order--info--voucher">
                  <h5>Voucher</h5>
                  <div className="d-flex justify-content-between mt-3">
                    {/* {list voucher } */}

                    {
                      <ul>
                        {listVoucher.map((_, i) => (
                          <li
                            onClick={(e) => {
                              setVoucher(_.code);
                            }}
                          >
                            <h6> {_.name}</h6>
                            <small> Expiry:{_.day_final} </small>
                          </li>
                        ))}
                      </ul>
                    }
                    <input
                      type="text"
                      onFocus={(e) => focusVoucher(e)}
                      onBlur={(e) => blurVoucher(e)}
                      value={valueVoucher}
                      onChange={(e) => setVoucher(e.target.value)}
                      placeholder="Enter voucher(apply only once)"
                    />
                    <button onClick={validVoucher} type="button">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="user__order--info--total mt-4">
                  <h5>Information Order</h5>
                  <div className="d-flex justify-content-between mb-3">
                    <p>Provisional Price</p>
                    <p>$ {totalBill().total}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p>Shipping Fee</p>
                    <p>$ {totalBill().total === 0 ? 0 : SHIPPING_FEE}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p>Voucher</p>

                    <p>
                      ${" "}
                      {totalBill().total > 14
                        ? VoucherChoose
                          ? parseInt(VoucherChoose.discount)
                          : 0
                        : 0}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p>Total:</p>
                    <p>$ {(TOTAL_BILL).toFixed(2)}</p>
                  </div>
                  <div>
                    <button type="button" onClick={() => setShow(true)}>
                      ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
        {display ? (
          <div className="user__form">
            <form onSubmit={(e) => handleSave(e)}>
              <h4>SHIPPING ADDRESS</h4>
              <div className="user__form--name">
                <label htmlFor="formControlInput" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  value={valueF.fullname}
                  required
                  name={"fullname"}
                  onChange={hangdleChangeForm}
                  className="form-control"
                />
              </div>
              <div className="user__form--contact">
                <div>
                  <label htmlFor="formControlInput" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    name={"telephone"}
                    value={valueF.telephone}
                    onChange={hangdleChangeForm}
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="formControlInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={valueF.email}
                    name={"email"}
                    onChange={hangdleChangeForm}
                    className="form-control"
                  />
                </div>
                <div className="user__form--address">
                  <label htmlFor="formControlInput" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    value={valueF.address}
                    name={"address"}
                    onChange={hangdleChangeForm}
                    className="form-control"
                  />
                </div>
                <div className="user__form--btn">
                  <button type="button" onClick={() => setDisplay(false)}>
                    Cancel
                  </button>
                  <button type="submit">Save</button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* over notification */}
      {show ? (
        <div className="overlay" onClick={() => setShow(false)}>
          <div className="overlay__modal">
            <div>
              <p>
                <i className={ICONCHECK}></i>
              </p>
              <h4>SUCCESSFUL ORDERED!!</h4>
              <h5>
                Your order will be shipped within 2 days from the date of order.
              </h5>
              <h4>THANKS FOR SHOPPING IN OUR SHOP!! </h4>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PaymentUser;
