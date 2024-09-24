import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Productdetail from "./Pages/ProductDetail/productdetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute.jsx";
const stripePromise = loadStripe(
  "pk_test_51Q1wXZHo18UCnMxziS30G6XuFraDutybjekF0jU1BvUe9R2NCXrSTrXyEl4107RXi6EvL8G3QD4QMaz2mTi9BS1k00rxaS1Lkj"
);
function Rrouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route
          path="/Payments"
          element={
            <ProtectedRoute
              msg={"you must log in to  pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/Orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<Productdetail />} />
      </Routes>
    </Router>
  );
}

export default Rrouter;
