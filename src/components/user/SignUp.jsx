import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getAccount } from "../../api/apiMethod";
import { makeId } from "../../common/common";
import { ICONLEFT } from '../../Icon';
import { createAccountAsyn } from "../../redux/thunk/actionThunk";
const schema = yup.object().shape({
  user_name: yup.string().required('Please enter your username').min(3),
  address: yup.string().required('Please enter your shipping address'),
  password: yup.string().required('Please enter your password').min(8).max(16),
  re_password: yup.string().required('Please confirm your password').min(8).max(16),
  telephone: yup.string().required('Please enter your telephone').min(9).max(11),
  fullname: yup.string(),
  email: yup.string().email(),

})
function SignUpFix(props) {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    checkUsername(() => {
      checkPassword(() => {
        handleCreateAccount(data);
      })
    });
  }
  const handleCreateAccount = (data) => {
    const {
      user_name,
      telephone,
      address,
      fullname,
      password,
      email,
    } = data;
    const itemAccount = {
      id: makeId(6),
      user_name: user_name,
      telephone: telephone,
      password: password,
      type: "",
      profile_id: makeId(5),
      cart_id: makeId(5),
      payment_id: makeId(5),
    };
    const itemProfile = {
      id: itemAccount.profile_id,
      address: address,
      fullname: fullname,
      email: email,
    };
    const cartItem = {
      id: itemAccount.cart_id,
      cart: [],
    };
    const paymentItem = {
      id: itemAccount.payment_id,
      profile_id: itemAccount.profile_id,
      cart_order: [],
      total: 0,
    };
    dispatch(
      createAccountAsyn({
        account: itemAccount,
        profile: itemProfile,
        cartItem: cartItem,
        paymentItem: paymentItem
      })
    );
    setTimeout(() => {
      toast.dismiss();
      toast.success("Signup complete!");
      navi("/login");
    }, 2000);
  };

  const checkUsername = (checkPassword) => {
    getAccount(`?user_name=${getValues("user_name")}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.length !== 0) {
          toast.dismiss();
          toast.error("Please enter user name diffrent again!");
        } else {
          if (checkPassword) {
            checkPassword();
          }
        }
      })
  }
  const checkPassword = (callback) => {
    const pass = getValues("password");
    const re_pass = getValues("re_password");
    if (pass !== re_pass) {
      toast.error("Your password isn't correct!!");
      setValue("password", "", { shouldDirty: true });
      setValue("re_password", "", { shouldDirty: true });
    } else {
      if (callback) {
        callback()
      }
    }
  }
  return (
    <div className="rolemodal">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="sign signInanimation">
          <div className='sign__title'>
            <p onClick={() => navi(-1)}><i className={ICONLEFT}></i></p>
            <h1>Sign Up</h1>
          </div>
          <div className="d-flex justify-content-between">
            <div className="sign__name">
              <input
                {...register("user_name")}
                autoComplete="off"
                name="user_name"
                type="text"

                placeholder="UserName"
              />
              {errors.user_name && <p className="error">{errors.user_name.message}</p>}
            </div>
            <div className="sign__name">
              <input
                {...register("fullname")}
                autoComplete="off"
                name="fullname"
                type="text"
                placeholder="FullName"
              />
              {errors.fullname && <p className="error">{errors.fullname.message}</p>}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="sign__phone">
              <input
                {...register("telephone")}
                autoComplete="off"
                name="telephone"
                type="number"
                placeholder="Phone"
              />
              {errors.telephone && <p className="error">{errors.telephone.message}</p>}
            </div>
            <div className="sign__address">
              <input
                {...register("email")}
                autoComplete="off"
                name="email"
                type="text"
                placeholder="Email"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>
          <div className="sign__address">
            <input
              {...register("address")}
              autoComplete="off"
              name="address"
              type="text"
              placeholder="Shipping Address"
              className='sign__address--input'
            />
            {errors.address && <p className="error">{errors.address.message}</p>}
          </div>
          <div className="d-flex justify-content-between">
            <div className="sign__password">
              <input
                {...register("password")}
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <div className="sign__repassword">
              <input
                {...register("re_password")}
                autoComplete="off"
                name="re_password"
                type="password"
                placeholder="Confirm password"
              />
              {errors.re_password && <p className="error">{errors.re_password.message}</p>}
            </div>
          </div>
          <div className="sign__btn">
            <button type="submit" >Create Account</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default SignUpFix;
