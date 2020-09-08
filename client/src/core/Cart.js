import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import Paymentb from "./PaymentB";
import "./shipment.css";
import Popup from "reactjs-popup";
import { isAutheticated } from "../auth/helper";
import useForm from "./useForm";
import validate from "./validation";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  let [paymentInfo, setPaymentInfo] = useState(true);
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
    if (!values && errors.length === undefined) {
      setPaymentInfo(true);
    } else {
      setPaymentInfo(false);
      alert("Your Info is successfully submitted. Please proceed for payment");
    }
  }

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = products => {
    return (
      <div>
        <h2>Your products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const shipmentDetails = () => {
    return (
      <>
        <div className='shipment-form'>
          <form onSubmit={handleSubmit} noValidate>
            <h2 className='detls'>Delievery Details</h2>
            <div className='form-group'>
              <label for>Full Name</label>
              <input
                name='fullname'
                onChange={handleChange}
                value={values.fullname || ""}
                className='form-control'
                type='text'
                placeholder='Name'
              />
              {errors.fullname && (
                <p className='help-is-danger'>{errors.fullname}</p>
              )}
            </div>
            <div className='form-group'>
              <label for>Address</label>
              <input
                name='address'
                onChange={handleChange}
                value={values.address || ""}
                className='form-control'
                type='text'
                placeholder='Address'
              />
              {errors.address && (
                <p className='help-is-danger'>{errors.address}</p>
              )}
            </div>
            <div className='form-group'>
              <label for>Phone Number</label>
              <input
                name='phonenumber'
                onChange={handleChange}
                value={values.phonenumber || ""}
                className='form-control'
                type='number'
                placeholder='Mobile number'
              />
              {errors.phonenumber && (
                <p className='help-is-danger'>{errors.phonenumber}</p>
              )}
            </div>
            <div className='form-group'>
              <label for>E-Mail</label>
              <input
                className='form-control'
                type='email'
                name='email'
                onChange={handleChange}
                value={values.email || ""}
                required
                placeholder='Email'
              />
              {errors.email && <p className='help-is-danger'>{errors.email}</p>}
            </div>
            <div class='form-row'>
              <div class='col-4'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='City'
                  name='city'
                  onChange={handleChange}
                  value={values.city || ""}
                  required
                />
                {errors.city && <p className='help-is-danger'>{errors.city}</p>}
              </div>
              <div class='col'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='State'
                  name='state'
                  onChange={handleChange}
                  value={values.state || ""}
                  required
                />
                {errors.state && (
                  <p className='help-is-danger'>{errors.state}</p>
                )}
              </div>
              <div class='col'>
                <input
                  type='number'
                  class='form-control'
                  placeholder='Zip'
                  name='zip'
                  onChange={handleChange}
                  value={values.zip || ""}
                  required
                />
                {errors.zip && <p className='help-is-danger'>{errors.zip}</p>}
              </div>
            </div>
            <div className='submit'>
              <button className='btn btn-success' type='submit'>
                Submit Information
              </button>
              &nbsp;
              <Popup
                modal
                trigger={
                  <button
                    className='btn btn-success'
                    type='button'
                    disabled={paymentInfo}
                  >
                    Proceed for Payment
                  </button>
                }
              >
                {close => (
                  <Paymentb
                    products={products}
                    setReload={setReload}
                    close={close}
                  />
                )}
              </Popup>
            </div>
          </form>
        </div>
      </>
    );
  };
  return (
    <Base title='Your cart products' description='Ready to checkout'>
      <div className='row'>
        <div className='col-6'>
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4 className='text-center'>
              No products found. Please login or add some products.
            </h4>
          )}
        </div>
        <div className='col-6'>
          {products.length > 0 ? (
            shipmentDetails()
          ) : (
            <h4 className='text-center'></h4>
          )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
