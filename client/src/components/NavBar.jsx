import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";


const NavBar = () => {
  return (
    <div className= "navbar">
      <NavLink to="/products" className="product">Products</NavLink>
      <NavLink to="/orders" className="order">Orders</NavLink>
    </div>
  );
  
};

export default NavBar;

