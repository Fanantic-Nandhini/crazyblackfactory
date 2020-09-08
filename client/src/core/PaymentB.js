import React, { useState, useEffect } from "react";
import { loadCart, cartEmpty } from "./helper/CartHelper";
import { Link } from "react-router-dom";
import { getmeToken, processPayment } from "./helper/PaymentBHelper";
import { createOrder } from "./helper/OrderHelper";
import { isAutheticated } from "../auth/helper";
import "./shipment.css";

import DropIn from "braintree-web-drop-in-react";

const Paymentb = ({
  products,
  setReload = f => f,
  reload = undefined,
  close
}) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {}
  });

  const userId = isAutheticated() && isAutheticated().user._id;
  const token = isAutheticated() && isAutheticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token).then(info => {
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const showbtdropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div className='paymentInfo'>
            <p className='text-center'>
              Your bill amount is ${getAmount()}
              <br />
              Please Use 378282246310005 as card number and expiry date as 12/21
            </p>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={instance => (info.instance = instance)}
            />
            <button
              type='button'
              className='btn btn-block btn-success'
              onClick={onPurchase}
            >
              Buy
            </button>
          </div>
        ) : (
          <h3 className='text-center'>Please login</h3>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info.instance.requestPaymentMethod().then(data => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: getAmount()
      };
      processPayment(userId, token, paymentData)
        .then(response => {
          setInfo({ ...info, success: response.success, loading: false });
          const orderData = {
            products: products,
            transaction_id: response.transaction.id,
            amount: response.transaction.amount
          };
          createOrder(userId, token, orderData);
          alert("Payment done Successfully");
          cartEmpty(() => {
            console.log("cart empty");
          });
          setReload(!reload);
        })
        .catch(error => {
          setInfo({ loading: false, success: false });
        });
    });
  };

  const getAmount = () => {
    let amount = 0;
    products.map(p => {
      amount = amount + p.price;
    });
    return amount;
  };

  return (
    <div className='paymentInfo'>
      {isAutheticated() ? (
        showbtdropIn()
      ) : (
        <p className='text-center'>
          Please login for further payment procedure
        </p>
      )}
    </div>
  );
};

export default Paymentb;
