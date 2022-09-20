import { Routes, Route } from "react-router-dom";

import './App.css';
import "../styleuser/index.scss";
import Homepage from "../page/user/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;


