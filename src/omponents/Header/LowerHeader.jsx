import React from "react";
import classes from "./header.module.css";
import { IoIosMenu } from "react-icons/io";

const LowerHeader = () => {
  return (
    <>
      <section>
        <div className={classes.lower_header}>
          <ul>
            <li>
              <IoIosMenu />
              <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Costumer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LowerHeader;
