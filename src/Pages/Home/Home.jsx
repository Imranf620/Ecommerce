import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TopSec from "../../Components/topSec/TopSec";
import Products from "../../Components/Product/Products";
import Footer from "../../Components/Footer/Footer";
import Top from "../../Components/Top/Top";
import Categories from "../../Components/Categories/Categories";
import SellingProduct from "../../Components/SellingProduct/SellingProduct";
import ImageComp from "../../Components/ImageCom/ImageComp";
import ImagesSec from "../../Components/ImagesSec/ImagesSec";
import Feature from "../../Components/Feature/Feature";

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
      <ImagesSec/>
      <Feature/>
      <Footer/>
    </div>
  );
};

export default Home;
