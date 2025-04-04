import React from "react";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Catagory from "../../Components/Catagories/Catagory";
import Products from "../../Components/Products/Products";
import LayOut from "../../Components/LayOut/LayOut";

const Landing = () => {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Catagory />
        <Products />
      </LayOut>
    </div>
  );
};

export default Landing;
