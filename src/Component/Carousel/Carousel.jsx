import "./carousel.css"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import myimg from "./data.js"
function Carousell() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {myimg.map((imageitemLink,i) => {
          return <img src={imageitemLink}
          key = {i}
          />;
        })}
      </Carousel>
      <div className="hero_img"></div>
    </div>
  );
}

export default Carousell
