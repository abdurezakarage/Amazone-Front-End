import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import {Link} from 'react-router-dom'
import Productcard from "./Productcard";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
     setIsLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data)
     
      setIsLoading(false);
    }).catch((err)=>{
      console.log(err)
    setIsLoading(false);
    })
  },[]);
   
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="products_container">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((singleproduct) => (
              <Productcard
                product={singleproduct}
                key={singleproduct.id}
                renderadd={true}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </section>
      )}
    </>
  );
}

export default Product;
