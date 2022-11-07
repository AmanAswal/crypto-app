import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Header, Coins, CoinDetails, Exchanges} from "./components/exportComponents";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coin/:id" element={<CoinDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
