import React, { useEffect, useState } from "react";
import "./Results.css";
import { useParams } from "react-router-dom";
import Layout from "../../Component/Layout/Layout";
import axios from "axios";
import productUrl from "../../APi/Endpoint";
import Productcard from "../../Component/Product/Productcard";
import Loader from "../../Component/Loader/Loader";
function Results() {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
         isLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
         isLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="products_container">
            {result?.map((product) => (
              <Productcard
                key={product.Id}
                renderAdd={true}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
