import { Route, Routes } from "react-router-dom";

import {
  UserPage,
  ProductPage,
  Dashboard,
  Homepage,
  VoucherPage,
  DiscountPage,
  OrderPage,
} from "../page/index.js";

import "./App.css";
import "../style/index.scss";
import "../styleuser/index.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
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
