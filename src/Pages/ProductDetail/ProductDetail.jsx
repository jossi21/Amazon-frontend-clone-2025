import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { base_url } from "../../API/Api";
import axios from "axios";
import ProductCard from "../../Components/Products/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <LayOut>
      <ProductCard singleItem={product} />
    </LayOut>
  );
};

export default ProductDetail;
