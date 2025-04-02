import React from "react";
import classes from "./catagories.module.css";

const CatagoryCard = ({ data, index }) => {
  return (
    <>
      <div className={classes.inner_container} key={index}>
        <a href="">
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.img_url} alt={data.name} />
          <p>shop now</p>
        </a>
      </div>
    </>
  );
};

export default CatagoryCard;
