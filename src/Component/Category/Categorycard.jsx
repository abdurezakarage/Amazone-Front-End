import React from "react";
import Categoryinfo from "./CategoryFullinfo.js";
import { Link } from "react-router-dom";
function Categorycard({ data }) {
  return (
    <div className="category">
      <Link to={`/Category/${data.name}`} className="fle">
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imglink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default Categorycard;
