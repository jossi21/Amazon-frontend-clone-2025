import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataPovider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./cart.module.css";
import { Type } from "../../Utility/action.type";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Cart = () => {
  const [{ cart, user }, dispatch] = useContext(DataContext);
  const total = cart.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_CART,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      id,
    });
  };
  return (
    <LayOut>
      <section className={classes.cart_container}>
        <div className={classes.container}>
          <h3
            style={{
              marginLeft: "20px",
              fontSize: "20px",
            }}
          >
            Hello
          </h3>
          <h4 style={{ marginTop: "10px", marginLeft: "10px" }}>
            Your shoping cart
          </h4>
          <hr />

          {cart?.length == 0 ? (
            <p>Oops! Sorry, no item in your cart! </p>
          ) : (
            cart?.map((item, id) => {
              return (
                <section key={item.id} className={classes.saddedToCart_section}>
                  <ProductCard
                    singleItem={item}
                    flex={true}
                    renderDescription={true}
                    renderAdd={false}
                  />
                  <div className={classes.add_remove_div}>
                    <span
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <MdKeyboardArrowUp size={25} />
                    </span>

                    <span>{item.amount}</span>

                    <span
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <MdKeyboardArrowDown size={25} />
                    </span>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {cart?.length !== 0 && (
          <div className={classes.subtotal_container}>
            <div>
              <p>Subtotal ({cart?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" name="" id="" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
