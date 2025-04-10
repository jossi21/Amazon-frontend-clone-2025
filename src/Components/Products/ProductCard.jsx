import React from "react";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ singleItem }) => {
  const { image, title, id, category, price, rating } = singleItem;
  return (
    <>
      <div className={classes.product_inner_container}>
        <Link to={`/products/${id}`}>
          <img src={image} alt={category} />
        </Link>
        <div>
          <h4>{title}</h4>
          <div className={classes.rating_wrapper}>
            <Rating value={rating?.rate ?? 0} precision={0.1} />
            <small>{rating?.count}</small>
          </div>
          <div>
            <CurrencyFormat amount={price} />
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
