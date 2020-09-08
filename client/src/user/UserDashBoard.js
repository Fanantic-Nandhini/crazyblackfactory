import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { purchasedProduct } from "./helper/getPurchasedProducts";
import _ from "lodash";
import "./user.css";

const UserDashBoard = () => {
  const { user, token } = isAutheticated();

  const [value, setValue] = useState([]);

  let purchasedItems = [];
  const preload = () => {
    purchasedProduct(user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        if (data && data[0] && data[0].purchases) {
          setValue({ ...data[0]["purchases"] });
        }
      }
    });
  };

  const products = () => {
    for (let i = 0; i < Object.keys(value).length; i++) {
      purchasedItems.push(value && value[i]);
    }
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base title={`Hello ${user.name}`} description='your account Info'>
      <div className='row text-center'>
        {Object.keys(value).length > 0 ?
        <>
        <div className='row shopping'>
          <i class='fa fa-shopping-cart fa-4x' aria-hidden='true'></i>&nbsp;
          <h1 className='heading'>Your Purchased Items</h1>
        </div>
        <div className='col-sm-6 offset-3'>
        {products()}
          <table class='table table-dark'>
            <thead>
              <tr>
                <th scope='col'>Items</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {purchasedItems.map(p => {
                return (
                  <tr>
                    <td>{p.name}</td>
                    <td>${p.amount}</td>
                    <td>1</td>
                    <td>
                      <span class='badge badge-success'>Received</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </> : (<h2>No products found. Please purchase some items</h2>)}
      </div>

    </Base>
  );
};

export default UserDashBoard;
