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
import { DetailProduct, SearchUser } from "../components/index.js";



function App(e) {

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
