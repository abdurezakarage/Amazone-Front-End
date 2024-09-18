import React, { useContext } from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
import Layout from '../../Component/Layout/Layout'
import { DataContext } from '../../Component/Dataprovider/Dataprovider'
import Currenceyformat from '../../Component/Currencey/Currenceyformat'
import Productcard from '../../Component/Product/Productcard'
import productUrl from '../../APi/Endpoint'
function Cart() {
  const[{basket, user},dispatch]= useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
    return item.price*item.amount + amount
  },0)

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
                <Productcard
                  product={item}
                  key={i}
                  flex={true}
                  renderadd={false}
                  renderDesc={true}
                />
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
