import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TopSec from "../../Components/topSec/TopSec";
import Products from "../../Components/Product/Products";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
import Top from "../../Components/Top/Top";
import Categories from "../../Components/Categories/Categories";
import SellingProduct from "../../Components/SellingProduct/SellingProduct";
import ImageComp from "../../Components/Categories/ImageCom/ImageComp";

const Home = () => {
  return (
    <div>
      <div>
        <Top/>
        <Navbar />
        <TopSec />
      </div>
      <div>
        <Products />
      </div>
      <Categories/>
      <SellingProduct/>
      <ImageComp/>
      <Login/>

      <Footer/>
    </div>
  );
};

export default Home;
