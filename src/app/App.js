import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from 'react-hot-toast';

import {
  adminRotes,
  userRoute
} from "../page/index.jsx";
import Pageroot from "../page/user/pageroot/Pageroot.jsx";
import { SearchAd, SearchUser } from "../components/index.js";
import { CommonComponent } from './../page/index';
import "./App.css";
import "../style/index.scss";
import "../styleuser/index.scss";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {CommonComponent.map((e, i) => <Route key={i} path={e.path} element={<e.Component />} exact={e.isExact} />)}
          <Route path="/" element={<Pageroot/>} >
            {userRoute.map((e, i) => <Route key={i} path={e.path} element={<e.Component />} exact={e.isExact} />)}
          </Route>
          {adminRotes.map((e, a) => <Route key={a} path={e.path} element={<e.Component />} exact={e.isExact} />)}
        </Routes>
      </Suspense>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default App;
