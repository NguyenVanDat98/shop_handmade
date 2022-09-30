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
  Pageroot,
} from "../page/index.js";
import "./App.css";
import "../style/index.scss";
import "../styleuser/index.scss";
import { useCallback, useEffect, useState } from "react";
import { AccountUser, DetailProduct, SearchUser } from "../components/index.js";


function App(e) {
  const URL = "http://localhost:8000/listProduct";
  const [listItem, setListItem] = useState([]);
  const fetchData = useCallback(async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setListItem(data);
      })
      .catch(err => console.log(err))

  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/admin/Product" element={<ProductPage />} />
        <Route path="/admin/Order" element={<OrderPage />} />
        <Route path="/admin/Voucher" element={<VoucherPage />} />
        <Route path="/admin/Discount" element={<DiscountPage />} />
        {
          listItem && listItem.map((e, i) => <Route key={i} path={`/${e.id}`} element={<Pageroot search={<SearchUser />} account={<AccountUser />}>
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
          </Pageroot>} />)
        }
      </Routes>
    </div>
  );
}

export default App;
