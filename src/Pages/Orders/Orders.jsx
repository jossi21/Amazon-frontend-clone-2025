import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataPovider";
import classes from "./Order.module.css";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../Utility/firebase";
import ProductCard from "../../Components/Products/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);

  const [order, setOrder] = useState([]);

  useEffect(() => {
    let pickOrders;
    if (user) {
      const orderRef = collection(doc(db, "users", user.uid), "orders");
      const orderMethod = query(orderRef, orderBy("created", "desc"));
      pickOrders = onSnapshot(
        orderMethod,
        (snapshot) => {
          // console.log(snapshot);
          setOrder(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        },
        (error) => {
          console.error("Error fetching orders: ", error);
        }
      );
    } else {
      setOrder([]);
    }
    return () => {
      if (pickOrders) {
        pickOrders();
      }
    };
  }, [user]);
  return (
    <div>
      <LayOut>
        <section className={classes.order__container}>
          <div className={classes.order__div}>
            <h2>Your Orders</h2>
            {order?.length == 0 && (
              <div style={{ padding: "20px" }}>
                <p>
                  oww sorry! {user?.email?.split("@")[0]} You didn't have any
                  orders yet!
                </p>
                <h3 style={{ paddingLeft: "7px" }}>Please, order</h3>
              </div>
            )}
            <div>
              {order?.map((singleOrder, i) => {
                return (
                  <div key={i}>
                    <hr />
                    <p>Order ID: {singleOrder?.id}</p>
                    {singleOrder?.data?.cart?.map((eachOrder) => {
                      return (
                        <ProductCard
                          flex={true}
                          singleItem={eachOrder}
                          key={eachOrder.id}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </LayOut>
    </div>
  );
};

export default Orders;
