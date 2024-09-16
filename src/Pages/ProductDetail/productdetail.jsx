import React, { useEffect, useState } from "react";
import "./productdetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../APi/Endpoint";
import Layout from "../../Component/Layout/Layout";
import Productcard from "../../Component/Product/Productcard";
function Productdetail() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  return (
    <Layout>
     <Productcard 
     product = {product}
     flex= {true}
     renderDesc= {true}
     
     />
      </Layout>
  )

  
}

export default Productdetail;
