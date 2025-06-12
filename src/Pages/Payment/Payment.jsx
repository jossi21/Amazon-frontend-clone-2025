import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataPovider";
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstant } from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Type } from "../../Utility/action.type";

const Payment = () => {
  const [{ user, cart }, dispatch] = useContext(DataContext);

  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  const totalPurchaseItem = cart?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const cardIssueHandler = (e) => {
    console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const total = cart?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  // the function tha handle the payment of goods
  // that have  three  basic steps
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      // 1 Contacting the backend function to get the client secret
      const response = await axiosInstant({
        method: "post",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      // 2 client side conformation

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // console.log(paymentIntent);

      // 3 put the data in the database to use different function and clear the cart

      const orderRef = doc(db, "users", user.uid, "orders", paymentIntent.id);

      await setDoc(orderRef, {
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      dispatch({ type: Type.EMPTY_CART });

      setProcessing(false);
      navigate("/orders", { state: { msg: "You have new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

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
            <div>{user?.email}</div>
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
              <form onSubmit={handleSubmit}>
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
                  {processing ? (
                    <div className={classes.loading}>
                      <ClipLoader size={12} />
                      <p>Please wait ...</p>
                    </div>
                  ) : (
                    "pay now"
                  )}
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
