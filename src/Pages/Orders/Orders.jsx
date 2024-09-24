import React, { useContext, useEffect, useState } from "react";
import "./Orders.css";
import Layout from "../../Component/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Component/Dataprovider/Dataprovider";
import { DockOutlined } from "@mui/icons-material";
import Productcard from "../../Component/Product/Productcard";
function Orders() {
  const [Orders, setOrders] = useState([]);
  const [{ user }, dispach] = useContext(DataContext);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout>
      <section className="container">
        <div className="orders_container">
          <h2>Your orders</h2>
          {/* {ordered item} */}
{Orders?.length == 0 && <div style={{padding:"5px"}}>you dont have orders</div>}
          <div>
            {Orders?.map((eachorder,i) => {
              return (
                <div>
                  <hr />
                  <p>order ID: {id}</p>
                  {eachorder?.data?.basket?.map((order) => (

                    <Productcard flex={true} product={order} key={order.id} />
            ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
