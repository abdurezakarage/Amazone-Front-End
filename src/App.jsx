import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Carousell from "./Component/Carousel/Carousel.jsx";
import Category from "./Component/Category/Category.jsx";
import Product from "./Component/Product/Product.jsx";
import Rrouter from "./Rrouter.jsx";
import { DataContext } from "./Component/Dataprovider/Dataprovider.jsx";
import { auth } from "./Utility/firebase.js";
import { Type } from "./Utility/action.Type.jsx";

function App() {
  const [{ user }, dispach] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispach({
          type: Type.SET_USER,
          user: authuser,
        });
      } else {
        dispach({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Rrouter />
    </>
  );
}

export default App;
