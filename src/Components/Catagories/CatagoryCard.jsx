import React from "react";
import classes from "./catagories.module.css";
import { Link } from "react-router-dom";

const CatagoryCard = ({ data, index }) => {
  return (
    <>
      <div className={classes.inner_container}>
        <Link to={`/category/${data.name}`}>
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.img_url} alt={data.name} />
          <p>shop now</p>
        </Link>
      </div>
    </>
  );
};

export default CatagoryCard;
