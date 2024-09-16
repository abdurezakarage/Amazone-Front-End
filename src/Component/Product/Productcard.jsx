import React from "react";
import "./product.css"
// import currenceyformat from ""
import { Link } from "react-router-dom";
function Productcard({ product, flex, renderDesc }) {
  if (!product) {
    return null;
  }
  const { image, title, id, rating, price, description } = product;
  return (
    <div
      className={`card_container  ${flex ? "product_flex" : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className="img_container" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "650px" }}>{description}</div>}
        <div className="rating">
          {/* {rating} */}
          {/* <Rating value={rating.rate} precision={0.1} /> */}
          {/* {count} */}
          {/* <small>{rating}</small> */}
        </div>
        <span>${price}</span>
        <div>
          {/* {price} */}
          {/* 
          <currenceyformat amount={price} /> */}
        </div>
        <button className="button">add to cart</button>
      </div>
    </div>
  );
}

export default Productcard;
