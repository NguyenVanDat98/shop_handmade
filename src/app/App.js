import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import {
  UserPage,
  ProductPage,
  Dashboard,
  Homepage,
  VoucherPage,
  DiscountPage,
  OrderPage,
  LoginPage,
  SignUpPage,
  CartPage,
  PaymentPage,
  Pageroot,
  ProfilePage,
  ProfileUserPage
} from "../page/index.js";
import "./App.css";
import "../style/index.scss";
import "../styleuser/index.scss";
import { useEffect } from "react";
import { AccountUser, DetailProduct, SearchUser } from "../components/index.js";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataProductAll, fetListProduct } from "../redux/thunk/actionThunk.js";



function App(e) {
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.users.listProductAll)

  useEffect(() => {
    dispatch(fetchDataProductAll())
  }, [dispatch]);


  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profileuser" element={<ProfileUserPage />} />
        <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/profile" element={<ProfilePage />} />
        <Route path="/admin/Dashboard" element={<Dashboard />} />
        <Route path="/admin/Product" element={<ProductPage />} />
        <Route path="/admin/Order" element={<OrderPage />} />
        <Route path="/admin/Voucher" element={<VoucherPage />} />
        <Route path="/admin/Discount" element={<DiscountPage />} />

        {/* <Route path="/:id" element={
          <Pageroot search={<SearchUser />} account={<AccountUser />}>
            <DetailProduct
              item={e}
              img={e.img}
              name={e.name}
              price={e.price}
              sold={e.sold}
              status={e.status}
              id={e.id}
              rating={e.rating}
              discount={e.discount}
            />
          </Pageroot>
        } /> */}
        {<Route path="/:id" element={<Pageroot search={<SearchUser />} >
          <DetailProduct />
        </Pageroot>} />}
        <Route path="/" element={<Homepage />} />

      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default App;
