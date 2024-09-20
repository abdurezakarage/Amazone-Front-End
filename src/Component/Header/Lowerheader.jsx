import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
function Lowerheader() {
  return (
    <div className='lower'>
      <div className="lower_container">
        <ul>
          <li>
            <AiOutlineMenu />
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Costumer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
      <div className='shop'>

      </div>
    </div>
  );
}

export default Lowerheader
