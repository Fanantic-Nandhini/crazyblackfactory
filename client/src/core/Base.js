import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className='container-fluid'>
      <div className='bg-dark text-white text-center'>
        <h2 className='title display-4'>{title}</h2>
        <p className='description lead'>{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  </div>
);

export default Base;
