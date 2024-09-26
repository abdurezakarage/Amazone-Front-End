import React from "react";
// import Categorycard from "./categorycard.jsx";
import Categoryinfo from "./CategoryFullinfo.js";
import "./category.css"
import { Link } from "react-router-dom";
import Categorycard from "./Categorycard.jsx";
function Category() {
  return (
    <section className="category_container">
      {Categoryinfo.map((info,i) => {
       return(
        <Categorycard data ={info}/>
       )
      })}
    </section>
  );
}

export default Category;
