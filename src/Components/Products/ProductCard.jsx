import React from "react";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Rating } from "@mui/material";

const ProductCard = ({ singleItem }) => {
  return (
    <>
      <div className={classes.product_inner_container}>
        <a href="">
          <img src={singleItem.image} alt={singleItem.catagory} />
        </a>
        <div>
          <h4>{singleItem.title}</h4>
          <div className={classes.rating}>
            <Rating value={singleItem.rating.rate} precision={0.1} />
            <small>{singleItem.rating.count}</small>
          </div>
          <div>
            <CurrencyFormat amount={singleItem.price} />
          </div>
        </div>
        <button className={classes.addCart_button} type="submit">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
