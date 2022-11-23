import React from "react";
import { NavLink } from "react-router-dom";
import s from "../style/NavBar.module.css" 


const NavBar = () => {
  return (
    <div className={s.NavBar}>
      <NavLink to="/" className={s.btn}>Home</NavLink>
      <NavLink to="/products" className={s.btn}>Products</NavLink>
      <NavLink to="/orders" className={s.btn}>Orders</NavLink>
      
    </div>
  );
  
};

export default NavBar;

