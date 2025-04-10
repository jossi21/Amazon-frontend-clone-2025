import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
// import { base_url } from "../../API/Api";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <section className={classes.outer_container}>
        {product?.map((item) => {
          return <ProductCard singleItem={item} key={item.id} />;
        })}
      </section>
    </>
  );
};

export default Products;
