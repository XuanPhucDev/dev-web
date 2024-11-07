import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Blog from "../Blog/BlogHomePage";
import ContactHomePage from "./ContactHomePage";
import Banner from "../Hompage/Banner";
import Partner from "../Hompage/Partner";
import About from "../Hompage/About";
import Popular from "../Hompage/Popular";
import Vision from "../Hompage/Vision";
import Benefits from "../Hompage/Benefits";
import Product from "../Hompage/Product";
import FeedbackCustomer from "../Hompage/Feedback";
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
