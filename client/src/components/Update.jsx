import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import s from "../style/Update.module.css";


const Update = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: null,
    status: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  


  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(product);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/products/"+ productId, product);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.form}>
      <h1>Update a new product</h1>
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="category"
        onChange={handleChange}
        name="category"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="status"
        onChange={handleChange}
        name="status"
      />
      <button className={s.btn} onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
