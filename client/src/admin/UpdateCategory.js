import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategory, updateCategory } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {
  const [name, setName] = useState({
    name: ""
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAutheticated();

  const goBack = () => (
    <div className='mt-5'>
      <Link className='btn btn-sm btn-success mb-3' to='/admin/dashboard'>
        Admin Home
      </Link>
    </div>
  );

  const handleChange = event => {
    setError("");
    setName(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request

    updateCategory(match.params.categoryId, user._id, token, { name }).then(
      data => {
        if (data.error) {
          setError(true);
        } else {
          setError("");
          setSuccess(true);
          setName(data.name);
        }
      }
    );
  };

  const successMessage = () => {
    if (success) {
      return <h4 className='text-success'>Category Updated successfully</h4>;
    }
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const preload = categoryId => {
    getCategory(categoryId).then(data => {
      if (data.error) {
        setError({ error: data.error });
      } else {
        setName(data.name);
      }
    });
  };

  const myCategoryForm = () => (
    <form>
      <div className='form-group'>
        <p className='lead'>Enter the category</p>
        <input
          type='text'
          className='form-control my-3'
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder='For Ex. Summer'
        />
        <button onClick={onSubmit} className='btn btn-outline-info'>
          Update Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title='Create a category here'
      description='Add a new category for new tshirts'
      className='container bg-info p-4'
    >
      <div className='row bg-white rounded'>
        <div className='col-md-8 offset-md-2'>
          {successMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
