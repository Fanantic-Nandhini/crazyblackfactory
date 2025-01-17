import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role }
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className='card'>
        <h4 className='card-header bg-dark text-white'> Admin Navigation</h4>
        <ol className='list-group'>
          <li className='list-group-item'>
            <Link to='/admin/create/category' className='nav-link text-success'>
              Create Categories
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/categories' className='nav-link text-success'>
              Manage Categories
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/create/product' className='nav-link text-success'>
              Create Products
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/products' className='nav-link text-success'>
              Manage Products
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/orders' className='nav-link text-success'>
              Manage Orders
            </Link>
          </li>
        </ol>
      </div>
    );
  };
  const adminRightSide = () => {
    return (
      <div className='card mb-4'>
        <h4 className='card-header'>Admin Information</h4>
        <ol className='list-group'>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2'>Name:</span>
            {name}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2'>E-mail:</span>
            {email}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-danger mr-2'>Admin Area</span>
          </li>
        </ol>
      </div>
    );
  };
  return (
    <Base
      title='Welcome to admin area'
      description='Manage all of your products here'
      className='container bg-success p-4'
    >
      <div className='row'>
        <div className='col-3'>{adminLeftSide()}</div>
        <div className='col-9'>{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
