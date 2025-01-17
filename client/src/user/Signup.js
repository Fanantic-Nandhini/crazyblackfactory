import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import "../styles.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div class='d-flex flex-row justify-content-center'>
        <div className='form-signup'>
          <div className='row'>
            <div className='col-md-6 offset-sm-3'>
              <form>
                <div className='form-group'>
                  <label className='text-light'>Name</label>
                  <input
                    className='form-control'
                    onChange={handleChange("name")}
                    type='text'
                    value={name}
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <label className='text-light'>Email</label>
                  <input
                    className='form-control'
                    onChange={handleChange("email")}
                    type='email'
                    value={email}
                    placeholder='Email'
                  />
                </div>

                <div className='form-group'>
                  <label className='text-light'>Password</label>
                  <input
                    onChange={handleChange("password")}
                    className='form-control'
                    type='password'
                    value={password}
                    placeholder='Password'
                  />
                </div>
                <button
                  onClick={onSubmit}
                  className='btn btn-success btn-block'
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-success'
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to='/signin'>Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-danger'
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title='Sign Up' description='New User? No worries signup here!!'>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
