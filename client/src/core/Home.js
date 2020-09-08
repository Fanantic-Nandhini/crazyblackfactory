import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import getProduct from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProduct().then(data => {
      if (data.error) {
        setError(data.error);
      }
      setProducts(data);
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base
      title='CrazyBlackFactory'
      description={
        <div>
          <i class='fa fa-check' aria-hidden='true'></i>
          &nbsp;Unique Designs&nbsp;
          <i class='fa fa-check' aria-hidden='true'></i>
          &nbsp;Variety of Collections&nbsp;
          <i class='fa fa-check' aria-hidden='true'></i>
          &nbsp;Casual Wear&nbsp;
          <i class='fa fa-check' aria-hidden='true'></i>
          &nbsp;Stylish Outcomes&nbsp;
        </div>
      }
    >
      <div className='row text-center'>
        <h1 className='text-white text-center'>Latest Collections</h1>
        <div className='row'>
          {products.map((product, index) => {
            return (
              <div key={index} className='col-4 mb-4'>
                <Card product={product}/>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
