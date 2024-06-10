import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginUser from "./Pages.js/LoginUser/LoginUser";
import React, { Suspense, lazy } from "react";


const ProductDetailComponant = lazy(() => import("./Pages.js/ProductDetail/ProductDetailComponant"));
const Navbar = lazy(() => import("./components/NavBar/Navbar"));
const PageNotFound = lazy(() => import("./components/PageNotFound/PageNotFound"));
const ProductAllItems = lazy(() => import("./Pages.js/ProductAllItems/ProductAllItems"));
const ProductInfo = lazy(() => import("./Pages.js/ProductAllItems/ProductInfo"));
const ProductAddItem = lazy(() => import("./Pages.js/ProductAllItems/ProductAddItem"));
const OtpPage = lazy(() => import("./Pages.js/AuthUser/OtpPage"));

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export default function App() {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
         
          <Route path="/" element={<Navigate to={isAuthenticated() ? "/ProductAllList" : "/login"} />} />
          <Route path="/ProductAllList" element={<ProductDetailComponant />} />
          <Route path="/ProductAllItems" element={<ProductAllItems />} />
          <Route path="/ProductEachItem/:id" element={<ProductInfo />} />
          <Route path="/ProductAllItems/addedCart" element={<ProductAddItem />}/>
          <Route path="/Page-not" element={<PageNotFound />}/>
          <Route path="/Register"  element={<OtpPage />} />
          <Route path="/login" element={<LoginUser />} />
        
        </Routes>
      </Suspense>
    </Router>
  );
}
