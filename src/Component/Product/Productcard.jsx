import React, { useContext } from "react";
import { Rating } from "@mui/material";
import "./Product.css"
import Currenceyformat from "../Currencey/Currenceyformat";
import "./product.css"
// import currenceyformat from ""
import { Link } from "react-router-dom";
import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../Utility/action.Type";
function Productcard({ product, flex, renderDesc,renderadd }) {
  if (!product) {
    return null;
  }
  const { image, title, id, rating, price, description } = product;
  const[state,dispatch]= useContext(DataContext);
  console.log(state);
const addtocart = ()=>{
  dispatch({
    type: Type.ADD_To_Basket,
    item: { image, title, id, rating, price, description },
  });
}

  return (
    <div className={`card_container  ${flex ? "product_flex" : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className="img_container" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "650px" }}>{description}</div>}
        <div className="rating">
          {/* {rating} */}
          <Rating readOnly value={rating?.rate} precision={0.1} />
          {/* {count} */}
          <small>{rating?.count}</small>
        </div>
       
        <div>
          {/* {price} */}

          <Currenceyformat amount={price} />
        </div>
        {renderadd && (
          <button className="button" onClick={addtocart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}
export default Productcard;

