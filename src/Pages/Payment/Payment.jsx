import React, { useContext, useState } from "react";
import "./Payment.css";
import Layout from "../../Component/Layout/Layout";
import Productcard from "../../Component/Product/Productcard";
import { DataContext } from "../../Component/Dataprovider/Dataprovider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { colors } from "@mui/material";
import Currenceyformat from "../../Component/Currencey/Currenceyformat";
import { axiosInstance } from "../../APi/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
function Payment() {
  const [{ basket, user }, dispach] = useContext(DataContext);
  const totalitem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const navigate = useNavigate();
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [carderror, setCarderror] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const handlechange = (e) => {
    e?.error?.message ? setCarderror(e?.error?.message) : setCarderror("");
  };
  const handlepayment = async (e) => {
    e.preventDefault();

    try {
      //step 1: backend contact
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `payment/create?total= ${total * 100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // step 2: client side or react side confirmation
      const { paymentInten } = stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);
      // step 3: order firestore database save and clear from the basket
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id);
      set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      //empty the basket
      // dispach(
      //   { type: "EMPTY_BASKET" }
      // )
      // setProcessing(false);
      // navigate("/Orders",{state:{msg:"you have placed new order"}});
    } catch (error) {
      // console.log(error);
      // setProcessing(false);
    }
  };
  return (
    <Layout>
      {/* {header} */}
      <div className="payment_header">Checkout ({totalitem}) items</div>
      {/* {payment method} */}

      <section className="payment">
        {/* {addres} */}
        <div className="flex">
          <h3>Delivery Addres</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* {product} */}
        <div className="flex">
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <Productcard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* {card form} */}

        <div className="flex">
          <h3>Payment methods</h3>
          <div className="payment_card_container">
            <div className="payment_detail">
              <form onSubmit={handlepayment} action="">
                {/* {error} */}
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}
                <CardElement onChange={handlechange} />
                {/* {price} */}
                <div className="payment_price">
                  <div>
                    <span style={{ display: "flex" }}>
                      <p>Total order |</p>
                      <Currenceyformat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className="loading">
                        <ClipLoader color="grey" size={12} />{" "}
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      " pay now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
