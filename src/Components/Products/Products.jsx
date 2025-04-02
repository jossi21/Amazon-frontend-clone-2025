import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get("https://fakestoreapi.com/products");
        setProduct(request.data);
        // console.log(request);
      } catch (error) {
        console.log("I got Error", error);
      }
    })();
  }, []);
  return (
    <>
      <section className={classes.outer_container}>
        {product?.map((item, id) => {
          return <ProductCard singleItem={item} key={id} />;
        })}
      </section>
    </>
  );
};

export default Products;
