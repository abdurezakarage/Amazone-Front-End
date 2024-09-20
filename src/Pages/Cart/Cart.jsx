import React, { useContext } from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
import Layout from '../../Component/Layout/Layout'
import { DataContext } from '../../Component/Dataprovider/Dataprovider'
import Currenceyformat from '../../Component/Currencey/Currenceyformat'
import Productcard from '../../Component/Product/Productcard'
import productUrl from '../../APi/Endpoint'
import { Type } from '../../Utility/action.Type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const[{basket, user},dispatch]= useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount;
  },0)
const increament = (item)=>{
  dispatch(
    {
      type:Type.ADD_To_Basket,item
    }
  )
}
const decreament = (id)=>{
  dispatch({
    type:Type.REAMOVE_From_basket,id
  })
}

  return (
    <Layout>
      <section className="container">
        <div className="cart_container">
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>No itme in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className="cart_product">
                  <Productcard
                    product={item}
                    key={i}
                    flex={true}
                    renderadd={false}
                    renderDesc={true}
                  />
                  <div className="btn_contaner">
                    <button className="btn" onClick={() => increament(item.id)}>
                      <IoIosArrowUp/>
                    </button>
                    <span>{item.amount}</span>
                    <button className="btn" onClick={() => decreament(item.id)}>
                      <IoIosArrowDown/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className='subtotal'>
            <div>
              <p>Sub total({basket?.length} items)</p>
              <Currenceyformat amount={total} />
            </div>
            <span>
              <input type="Checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">continue to check out</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart
