import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
