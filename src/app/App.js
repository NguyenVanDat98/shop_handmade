
import { Route, Routes } from "react-router-dom";
import UserPage from './../page/admin/UserPage';
import ProductPage from './../page/admin/ProductPage';
import Homepage from './../page/user/homepage/Homepage';
import Dashboard from './../page/admin/Dashboard';


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
        <Route path="/admin/Order" element={<Dashboard />} />
        <Route path="/admin/Voucher" element={<Dashboard />} />
        <Route path="/admin/Discount" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;


