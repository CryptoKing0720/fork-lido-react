import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Ethereum from "./pages/Ethereum";
import Polygon from "./pages/Polygon";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="__className_da1155">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ethereum" element={<Ethereum />} />
          <Route path="/polygon" element={<Polygon />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
