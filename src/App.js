import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Billing from "./Pages/Billing/Billing";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SingleProduct from "./Pages/SigleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
