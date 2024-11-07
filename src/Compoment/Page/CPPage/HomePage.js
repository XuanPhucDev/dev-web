import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Banner from "../Marketing/CategoryMar/Banner";
import Partner from "../Marketing/CategoryMar/Partner";
import About from "../Marketing/CategoryMar/About";
import Popular from "../Marketing/CategoryMar/Popular";
import Vision from "../Marketing/CategoryMar/Vision";
import Benefits from "../Marketing/CategoryMar/Benefits";
import Product from "../Marketing/CategoryMar/Product";
import Blog from "../Blog/BlogHomePage";
import ContactHomePage from "./ContactHomePage";
import FeedbackCustomer from "../Marketing/CategoryMar/Feedback";
const HomePage = () => {
  return (
    <div className="homepage">
      <Banner></Banner>
      <Partner></Partner>
      <About></About>
      <Popular></Popular>
      <Vision></Vision>
      <Benefits></Benefits>
      <Product></Product>
      <FeedbackCustomer></FeedbackCustomer>
      <Blog></Blog>
      <ContactHomePage></ContactHomePage>
    </div>
  );
};

export default HomePage;
