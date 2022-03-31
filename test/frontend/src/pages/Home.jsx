import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories.jsx";
import Footer from "../components/Footer.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Products from "../components/Products.jsx";
import Slider from "../components/Slider.jsx";

const Home = () => {
  return (
    <>
      <Announcement></Announcement>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Home;
