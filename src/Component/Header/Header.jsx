import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom"
// import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { BiCart } from "react-icons/bi";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      {/* {delivery} */}
      <span>{/* {icon} */}</span>
      <div>
        <p>Deliverd to</p>
        <span>Ethiopia</span>
      </div>
      <div className="header_search">
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input
          className="header_search-input"
          type="text"
          placeholder="Search product"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="us">
          <img
            className="usimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/40px-Flag_of_the_United_States.png?20110131151900"
          />
          <select>
            <option value="">EN</option>
          </select>
        </div>
        <Link to="" className="header_option">
          <span className="header_optionLineone">Helo, Sign in</span>
          <span className="header_optionLinetwo">Account & Lists</span>
        </Link>
        <Link to="/Orders" className="header_option">
          <span className="header_optionLineone">Returns</span>
          <span className="header_optionLinetwo">& Orders</span>
        </Link>
        <Link to="" className="header_option">
          <span className="header_optionLineone">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </Link>
        <Link to="/Cart">
          <div className="header_optionbasket">
            <BiCart />
            <span className="header_optionLineTwo header_Basketcount ">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
