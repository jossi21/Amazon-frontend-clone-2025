import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import ResultsCard from "./ResultsCard";
import { base_url } from "../../API/Api";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./results.module.css";
const Results = () => {
  const [product, setProduct] = useState([]);

  const { categoryName } = useParams();
  //   console.log(categoryName);

  useEffect(() => {
    axios
      .get(`${base_url}/products/category/${categoryName}`)
      .then((res) => {
        setProduct(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("i faced a problem to fetch");
      });
  }, []);

  return (
    <div>
      <LayOut>
        <section>
          <h1>Results</h1>
          <p>Category / {categoryName}</p>
          <hr />
          <div className={classes.outer_container}>
            {product?.map((singleProduct, id) => {
              return <ResultsCard key={id} singleItem={singleProduct} />;
            })}
          </div>
        </section>
      </LayOut>
    </div>
  );
};

export default Results;
