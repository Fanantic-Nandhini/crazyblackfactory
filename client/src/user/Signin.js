import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/helper";
import "../styles.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to='/admin/dashboard' />;
      } else {
        return <Redirect to='/user/dashboard' />;
      }
    }

    if (isAutheticated()) {
      return <Redirect to='/' />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div class='d-flex flex-row justify-content-center'>
        <div className='form-signin'>
          <div className='row'>
            <div className='col-md-6 offset-sm-3'>
              <form>
                <div className='form-group'>
                  <label className='text-light'>Email</label>
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    className='form-control'
                    type='email'
                    placeholder='Email'
                  />
                </div>

                <div className='form-group'>
                  <label className='text-light'>Password</label>
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    className='form-control'
                    type='password'
                    placeholder='Password'
                  />
                </div>
                <button
                  onClick={onSubmit}
                  className='btn btn-success btn-block'
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base
      title='Sign In'
      description='Please Signin with your username and password!!'
    >
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
