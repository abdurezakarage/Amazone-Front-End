import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import {Link} from 'react-router-dom'
import Productcard from "./Productcard";
function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //  setIsLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data)
      console.log(res.data);
      // setIsLoading(false);
    }).catch((err)=>{
      console.log(err)
    // setIsLoading(false);
    })
  },[]);
   
  return (
   
    <section className="products_container">
      {/* <section className="products_container">
        {products?.map((singleproduct) => {
          return <Productcard Product ={singleproduct} key={singleproduct.id} />;
        })}
      </section> */}

      {Array.isArray(products) && products.length > 0 ? (
        products.map((singleproduct) => (
          <Productcard product={singleproduct} key={singleproduct.id} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </section>
  );
}

export default Product;
