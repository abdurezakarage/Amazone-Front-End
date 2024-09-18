import React from 'react'
import './Lowerheader.css'
import { AiOutlineMenu } from "react-icons/ai";
function Lowerheader() {
  return (
    <a className="lowhead" href="">
      <div className="lowerh">
        <div className="loweerleft">
          <li className='menu'>
            <AiOutlineMenu />
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Customer Services</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </div>
        <div className="lowerright">Shop the Gaming Store</div>
      </div>
    </a>
  );
}

export default Lowerheader
