import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../Page/CPPage/HomePage";
import CategoryProduct from "../../Page/Detail/CategoryProduct";
import Search from "../../Page/Detail/Search";
import Product from "../../Page/Detail/Product";
import Cart from "../../Page/CPPage/Card";
import Order from "../../Page/Order/Order";
import ProductMarketing from "../../Page/Product/ProductMarketing";
import Footer from "../Footer/Footer";
import GetInTouch from "../Footer/GetInTouch";
import AboutUs from "../../Page/CPPage/AboutUs";
import PageServices from "../../Page/CPPage/PageServices";
import "./Body.css";
import Category from "../../Page/Hompage/Category";
import AuthPage from "../../Page/Admin/Login/AuthPage";
import Logout from "../../Page/Admin/Login/Logout";
import PricingPlan from "../../Page/CPPage/PricingPlan";
import PageBlog from "../../Page/CPPage/PageBlog";
import PageContact from "../../Page/CPPage/PageContact";

const Body = () => {
  return (
    <div className="body-page">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-category" element={<CategoryProduct />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/search/:searchQuery" element={<Search />}></Route>
        <Route path="/product/:searchQuery" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/thiet-ke-website" element={<Category />}></Route>
        <Route path="/blog" element={<PageBlog />}></Route>
        <Route path="/login" element={<AuthPage />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/contact" element={<PageContact />}></Route>
        <Route path="/services" element={<PageServices />}></Route>
        <Route path="/pricing-plan" element={<PricingPlan />}></Route>
        <Route
          path="/product-marketing/:slug"
          element={<ProductMarketing />}
        ></Route>
      </Routes>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
};

export default Body;
