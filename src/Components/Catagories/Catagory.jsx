import React from "react";
import classes from "./catagories.module.css";
import Catagories from "./catagoriesData";
import CatagoryCard from "./CatagoryCard";

const Catagory = () => {
  return (
    <>
      <section className={classes.outer_container}>
        {Catagories?.map((singleItem, id) => {
          return <CatagoryCard data={singleItem} index={id} />;
        })}
      </section>
    </>
  );
};

export default Catagory;
