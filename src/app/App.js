import { Route, Routes } from "react-router-dom";

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
  DetailPage,
  CartPage,
  PaymentPage,
} from "../page/index.js";

import "./App.css";
import "../style/index.scss";
import "../styleuser/index.scss";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/admin/Product" element={<ProductPage />} />
        <Route path="/admin/Order" element={<OrderPage />} />
        <Route path="/admin/Voucher" element={<VoucherPage />} />
        <Route path="/admin/Discount" element={<DiscountPage />} />
      </Routes>
    </div>
  );
}

export default App;
