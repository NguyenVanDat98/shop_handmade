import React from "react";
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccount } from "../../api/apiMethod";
import { makeId } from "../../common/common";
import { ICONBACK } from "../../Icon";
import { createAccountAsyn, toastId } from "../../redux/thunk/actionThunk";

function SignUp(props) {
  const [step, setStep] = useState(true);

  const dispatch = useDispatch();
  const focusInputPass = useRef();
  const focusInputRePass = useRef();
  const focusInputName = useRef();
  const focusInputAddress = useRef();
  const focusInputTelephone = useRef();
  const navi = useNavigate()
  const [rePass, setRepass] = useState("");
  const [formValue, setFormValue] = useState({
    user_name: "",
    telephone: Number,
    address: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const handleChangeInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleContinue = () => {
    if (
      formValue.user_name.length == 0 ||
      formValue.telephone.length == 0 ||
      formValue.address.length == 0 ||
      formValue.password.length == 0
    ) {
      switch ("") {
        case formValue.user_name:
          focusInputName.current.focus();
          toast.dismiss();
          toast.error(`Please enter the ${focusInputName.current.name}!`);
          break;
        case formValue.telephone:
          focusInputTelephone.current.focus();
          toast.error(`Please enter the ${focusInputTelephone.current.name}!`);
          break;
        case formValue.address:
          focusInputAddress.current.focus();
          toast.dismiss();
          toast.error(`Please enter the ${focusInputAddress.current.name}!`);
          break;

        case formValue.password:
          focusInputPass.current.focus();
          toast.dismiss();
          toast.error(`Please enter the ${focusInputPass.current.name}!`);
          break;

        default:
          break;
      }
    } else
      getAccount(`?user_name=${formValue.user_name}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length !== 0) {
            toast.dismiss();
            toast.error("Please enter user name diffrent again!");
            focusInputName.current.focus();
          } else if (
            formValue.password !== rePass ||
            formValue.password.length == 0
          ) {
            toast.error("Please enter password again!");
            focusInputPass.current.focus();
            setFormValue({ ...formValue, password: "" });
            setRepass("");
          } else {
            setStep(false);
          }
        });
  };
  const handleCreateAccount = () => {
    const {
      user_name,
      telephone,
      address,
      first_name,
      last_name,
      password,
      email,
    } = formValue;
    const itemAccount = {
      id: makeId(6),
      user_name: user_name,
      telephone: telephone,
      password: password,
      type: "",
      profile_id: makeId(5),
    };
    const itemProfile = {
      id: itemAccount.profile_id,
      first_name: first_name,
      last_name: last_name,
      email: email,
    };
    dispatch(createAccountAsyn({account: itemAccount,profile: itemProfile}))
    for (const key in formValue) {formValue[key]="" }
        setFormValue(formValue);
        setRepass("");
        setTimeout(()=>{toast.dismiss();toast.success("Signup complete!");navi("/login");},2000)
        ;
  };
  return (
    <div className="rolemodal">
      {step && (
        <div className="sign signInanimation">
          <h1>Sign Up (step 1)</h1>
          <div className="sign__name">
          
            <input
              onChange={handleChangeInput}
              value={formValue.user_name}
              autoComplete="off"
              ref={focusInputName}
              name="user_name"
              type="text"
              
              placeholder="Name (required)"
            />
           
          </div>
          <div className="sign__phone">
            <input
              onChange={handleChangeInput}
              value={formValue.telephone}
              ref={focusInputTelephone}
              autoComplete="off"
              name="telephone"
              type="number"
              placeholder="Phone (required)"
            />
          </div>
          <div className="sign__address">
            <input
              onChange={handleChangeInput}
              value={formValue.address}
              ref={focusInputAddress}
              autoComplete="off"
              name="address"
              type="text"
              placeholder="Shipping Address (required)"
            />
          </div>
          <div className="sign__password">
            <input
              onChange={handleChangeInput}
              value={formValue.password}
              autoComplete="off"
              ref={focusInputPass}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="sign__repassword">
            <input
              onChange={(e) => setRepass(e.target.value)}
              value={rePass}
              autoComplete="off"
              ref={focusInputRePass}
              name="re_password"
              type="password"
              placeholder="Re-enter password"
            />
          </div>
          <div className="sign__btn">
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      )}
      {!step && (
        <div className="sign module_info">
          <h1>Sign Up (step 2)</h1>
          <div className="sign__name">
            <input
              onChange={handleChangeInput}
              autoComplete="off"
              name="first_name"
              value={formValue.first_name}
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="sign__phone">
            <input
              onChange={handleChangeInput}
              autoComplete="off"
              name="last_name"
              value={formValue.last_name}
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="sign__address">
            <input
              onChange={handleChangeInput}
              autoComplete="off"
              name="email"
              value={formValue.email}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="sign__btn btn-group">
            <button onClick={() => setStep(true)}>
              {" "}
              <i className={ICONBACK}></i> Back{" "}
            </button>
            <button onClick={handleCreateAccount}>Create Account</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
