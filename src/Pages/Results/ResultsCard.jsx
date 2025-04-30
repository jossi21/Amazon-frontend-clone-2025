import React, { useContext } from "react";
import { Rating } from "@mui/material";
import classes from "./results.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { DataContext } from "../../Components/DataProvider/DataPovider";
import { Type } from "../../Utility/action.type";

const ResultsCard = ({ singleItem }) => {
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: singleItem,
    });
  };
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
          <div>
            <CurrencyFormat amount={singleItem.price} />
          </div>
        </div>
        <button className={classes.result_button} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ResultsCard;
