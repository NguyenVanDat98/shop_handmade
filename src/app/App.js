import { Route, Routes } from "react-router-dom";

import UserPage from "../layout/UserPage";
import Dashboard from './../layout/Dashboard';
import ProductPage from "../layout/ProductPage";
import "./App.css";
import "../style/index.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/admin/Product" element={<ProductPage />} />
        <Route path="/admin/Order" element={<Dashboard />} />
        <Route path="/admin/Voucher" element={<Dashboard />} />
        <Route path="/admin/Discount" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
