import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/SignIn";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProtectedRout from "./Components/ProtectedRout/ProtectedRout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RHrtYQQcSPgJt2MjBFkkQ7msUK2sMKnBRKLCGlkd15vegjzSYvhB5CdqNha4XzjOOwxYpXKUsBXQ71oU0IyfZjM00WunGhPbl"
);

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auht" element={<SignIn />} />
          <Route
            path="/payments"
            element={
              <ProtectedRout
                msg={"You must be log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRout>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/orders"
            element={
              <ProtectedRout
                msg={"You must be log in to access your order"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRout>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
