import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../Carousel/imges/imgdata.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {images?.map((singleImg) => {
          return <img src={singleImg} alt="carousel images" />;
        })}
      </Carousel>
      <div className={classes.carousel_fade}></div>
    </>
  );
};

export default CarouselEffect;
