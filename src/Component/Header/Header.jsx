import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
// import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { GrLocation } from "react-icons/gr";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../Dataprovider/Dataprovider";
import Lowerheader from "./Lowerheader";
function Header() {
  const [{basket}, dispatch] = useContext(DataContext);
 const totalitem= basket?.reduce((amount,item)=>{
  return item.amount+amount
 },0)
  return (
    <section className="fixed">
      <div className="header_container">
        <div className="logo_container">
          <Link to="/">
            <img
              className=""
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>

          <div className="delivery">
            <span className="location">
              <GrLocation />
            </span>
            <div className="">
              <p>Deliverd to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="search">
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <div className="searchicon">
            <SearchIcon />
          </div>
        </div>
        <div className="order_container">
          <Link href="" className="language">
            <img
              className="usimg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/40px-Flag_of_the_United_States.png?20110131151900"
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="/auth">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="" className="header_option">
            <span className="header_optionLineone">Your</span>
            <span className="header_optionLinetwo">Prime</span>
          </Link>
          <Link to="/Cart">
            <div className="cart">
              <BiCart size={40} />
              <span className="cartno ">{totalitem}</span>
            </div>
          </Link>
        </div>
      </div>
      <Lowerheader />
    </section>
  );
}

export default Header;
