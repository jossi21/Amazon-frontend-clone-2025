import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loading from "../Loading/Loading";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("i couldn't fetch!", err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={classes.outer_container}>
          {product?.map((item) => {
            return <ProductCard singleItem={item} key={item.id} />;
          })}
        </section>
      )}
    </>
  );
};

export default Products;
