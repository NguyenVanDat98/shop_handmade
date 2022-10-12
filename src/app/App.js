import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import {
    adminRotes,
    userRoute
} from "../page/index.jsx";
import "./App.css";
import "../style/index.scss";
import "../styleuser/index.scss";
function App(e) {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {userRoute.map((e, i) => <Route key={i} path={e.path} element={<e.Component />} exact={e.isExact} />)}
                    {adminRotes.map((e, a) => <Route key={a} path={e.path} element={<e.Component />} exact={e.isExact} />)}
                </Routes>
            </Suspense>

            <Toaster position='top-center' reverseOrder={false} />
        </div>
    );
}

export default App;
