import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import './App.css';
import Bai1 from "./pages/bai1";
import Bai2 from "./pages/bai2";
import Bai3 from "./pages/bai3";





function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="bai1" element={<Bai1/>} />
            <Route path="bai2" element={<Bai2 />} />
            <Route path="bai3" element={<Bai3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
