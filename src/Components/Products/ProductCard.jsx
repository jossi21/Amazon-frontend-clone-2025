import React from "react";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { ListItem, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Pages/DataProvider/DataPovider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ singleItem, flex, renderDescription }) => {
  const { image, title, id, category, price, rating, description } = singleItem;

  const [state, dispatch] = useContext(DataContext);

  // console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: {
        image,
        title,
        id,
        category,
        price,
        rating,
        description,
      },
    });
  };
  return (
    <>
      <div
        className={`${classes.product_inner_container} ${
          flex ? classes.product_felx : ""
        }`}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt={category} />
        </Link>
        <div>
          <h4>{title}</h4>
          {renderDescription ? (
            <div
              style={{
                maxWidth: "650px",
                marginTop: "10px",
                paddingRight: "9px",
              }}
            >
              {description}
            </div>
          ) : (
            ""
          )}
          <div className={classes.rating_wrapper}>
            <Rating value={rating?.rate ?? 0} precision={0.1} />
            <small>{rating?.count}</small>
          </div>
          <div>
            <CurrencyFormat amount={price} />
          </div>
          <button
            className={classes.addCart_button}
            type="submit"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
