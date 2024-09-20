import React, { useEffect, useState } from "react";
import "./productdetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../APi/Endpoint";
import Layout from "../../Component/Layout/Layout";
import Productcard from "../../Component/Product/Productcard";
import Loader from "../../Component/Loader/Loader";
function Productdetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const[isLoading,setIsLoading]= useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, [productId]);
  return (
    <Layout>
      {isLoading?(<Loader/>): (<Productcard 
     product = {product}
     flex= {true}
     renderDesc= {true}
     renderadd={true}
     
     />)}
    
      </Layout>
  )

  
}

export default Productdetail;
