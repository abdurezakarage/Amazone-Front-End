import React from 'react'
import Layout from '../../Component/Layout/Layout';
import Carousell from '../../Component/Carousel/Carousel';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Product/Product';
import Productcard from '../../Component/Product/Productcard';
function Landing() {
  return (
    <Layout>
      <Carousell />
      <Category />
      <Product/>
     
    </Layout>
  );
}

export default Landing
