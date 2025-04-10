import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { base_url } from "../../API/Api";
import axios from "axios";
import ProductCard from "../../Components/Products/ProductCard";
import Loading from "../../Components/Loading/Loading";

const ProductDetail = () => {
  const { productId } = useParams();

  // console.log(productId);
  const [product, setproduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${base_url}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error", err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loading />
      ) : (
        <ProductCard
          singleItem={product}
          flex={true}
          renderDescription={true}
        />
      )}
    </LayOut>
  );
};

export default ProductDetail;
