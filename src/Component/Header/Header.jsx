import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
// import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { GrLocation } from "react-icons/gr";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../Dataprovider/Dataprovider";
import Lowerheader from "../Lowerheader/Lowerheader";
function Header() {
  const [{basket}, dispatch] = useContext(DataContext);
  console.log(basket.length);
  return (
    <section className="fixed">
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon logo"
          />
        </Link>

        <div className="Delivery">
          <span className="location">
            <GrLocation />
          </span>
          <div>
            <p>Deliverd to</p>
            <span>Ethiopia</span>
          </div>
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
              <BiCart size={40} />
              <span className="header_optionLineTwo header_Basketcount ">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Lowerheader />
    </section>
  );
}

export default Header;
