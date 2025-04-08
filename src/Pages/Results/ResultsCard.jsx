import React from "react";
import { Rating } from "@mui/material";
import classes from "./results.module.css";

const ResultsCard = ({ singleItem }) => {
  return (
    <>
      <div className={classes.inner_container}>
        <img className={classes.resultCard_img} src={singleItem.image} alt="" />
        <div className={classes.text_wrapper}>
          <h3>{singleItem.title}</h3>
          <div className={classes.resultCard_rating}>
            <Rating value={singleItem.rating.rate} precision={0.1} />
            <small>{singleItem.rating.count}</small>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </>
  );
};

export default ResultsCard;
