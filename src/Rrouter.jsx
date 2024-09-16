import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Productdetail from "./Pages/ProductDetail/productdetail.jsx";
function Rrouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<Productdetail />} />
      </Routes>
    </Router>
  );
}

export default Rrouter;
