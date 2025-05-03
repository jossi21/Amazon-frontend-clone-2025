import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataPovider";
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
const Payment = () => {
  const [{ user, cart }, dispatch] = useContext(DataContext);

  const [cardError, setCardError] = useState("");

  const totalPurchaseItem = cart?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const element = useElements();

  const cardIssueHandler = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const total = cart?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  return (
    <LayOut>
      <div className={classes.payment_header}>
        Check out ({totalPurchaseItem}) items
      </div>
      {/* payment detail section */}
      <section className={classes.payment_detail_wrapper}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>4kilo, Arada</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* items */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {cart?.map((item) => (
              <ProductCard singleItem={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* payment form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment_card_container}>
            <div>
              {/* card element */}
              <form action="">
                <CardElement onChange={cardIssueHandler} />
                <div>
                  <div>
                    {/* card error */}
                    {cardError && (
                      <small style={{ color: "red", paddingTop: "20px" }}>
                        {cardError}
                      </small>
                    )}
                    {/* total price */}
                  </div>

                  <div className={classes.payment__total__price}>
                    <small>Total Order | {totalPurchaseItem} items </small>
                    <small>
                      <CurrencyFormat amount={total} />{" "}
                    </small>
                  </div>
                </div>
                <button className={classes.payment_button} type="submit">
                  pay now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
