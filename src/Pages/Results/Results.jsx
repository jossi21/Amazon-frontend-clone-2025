import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import ResultsCard from "./ResultsCard";
import { base_url } from "../../API/Api";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./results.module.css";
import Loading from "../../Components/Loading/Loading";

const Results = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  //   console.log(categoryName);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${base_url}/products/category/${categoryName}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("i faced a problem to fetch", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <LayOut>
        <section>
          <h1>Results</h1>
          <p>Category / {categoryName}</p>
          <hr />
          {isLoading ? (
            <Loading />
          ) : (
            <div className={classes.outer_container}>
              {product?.map((singleProduct, id) => {
                return <ResultsCard key={id} singleItem={singleProduct} />;
              })}
            </div>
          )}
        </section>
      </LayOut>
    </div>
  );
};

export default Results;
