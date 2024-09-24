import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { auth } from "../../Utility/firebase";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../Dataprovider/Dataprovider";
import Lowerheader from "./Lowerheader";
function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totalitem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
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
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Hello , sign in</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
            {/* <p>Sign In</p> */}
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
