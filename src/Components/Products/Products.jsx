import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => JSON(res))
          .then((data) => {
            setProduct(request.data);
          });
        console.log(request);
      } catch (error) {
        console.log("I got Error", error);
      }
    })();
  }, []);
  return (
    <>
      <section>{}</section>
    </>
  );
};

export default Products;
