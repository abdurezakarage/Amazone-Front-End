import React from 'react'
import { HashLoader, FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh"
      }}
    >
      <HashLoader />
      <FadeLoader color="lightblue"/>
    </div>
  );
}

export default Loader
