import React from "react";
import classes from "./header.module.css";
import amazonLogo from "../../assets/Images/amazon_PNG11.png";
import americaFlag from "../../assets/Images/america fleg.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <>
        <section>
          <div className={classes.header_container}>
            <div className={classes.logo_container}>
              {/* Logo */}
              <Link to="/">
                <img src={amazonLogo} alt="amazon logo" />
              </Link>
              <div className={classes.delivery}>
                {/* location icon */}
                <span>
                  <IoLocationOutline />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            <div className={classes.search_container}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              {/* search icon */}
              <IoSearchSharp size={25} />
            </div>
            <div className={classes.right_container}>
              <div className={classes.flag_container}>
                <img src={americaFlag} alt="" />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </div>

              {/* sign in part */}
              <Link to="/auht">
                <div>
                  <p>Sing In</p>
                  <span>Account & Lists</span>
                </div>
              </Link>
              {/* return order part */}
              <Link to="/orders">
                <p>return</p>
                <span>& Orders</span>
              </Link>
              {/* cart part */}
              <a href="/cart" className={classes.cart}>
                {/* cart icon */}
                <PiShoppingCartBold size={35} />
                <span>0</span>
              </a>
            </div>
          </div>
        </section>
        <LowerHeader />
      </>
    </div>
  );
};

export default Header;
