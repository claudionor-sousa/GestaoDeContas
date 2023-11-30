import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/User";
import FaleConosco from "./pages/HelperUser";
import FAQPage from "./pages/DuvidasFrequentes";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/FaQ" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
