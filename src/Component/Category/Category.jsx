import React from "react";
// import Categorycard from "./categorycard.jsx";
import Categoryinfo from "./CategoryFullinfo.js";
import "./category.css"
import { Link } from "react-router-dom";
function Category() {
  return (
    <section className="category_container">
      {Categoryinfo.map((info,i) => {
       
        return (
          <div key={i} className="category">
            <Link to={`/Category/${info.name}`} className="flex">
              <h2> {info.title}</h2>
              <img src={info.imglink} />
              <p>Shop now</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Category;
