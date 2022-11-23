import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import s from "../style/Update.module.css";

const AddOrder = () => {
  const [order, setOrder] = useState({
    consumer: "",
    status: "",
    date: null,
    total:null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(order);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/orders", order);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.form}>
      <h1 className={s.header}>Add a new Order</h1>
      <input
        type="text"
        placeholder="consumer"
        onChange={handleChange}
        name="consumer"
      />
      <input
        type="date"
        placeholder="date"
        onChange={handleChange}
        name="date"
      />
      <input
        type="number"
        placeholder="total"
        onChange={handleChange}
        name="total"
      />
      <input
        type="text"
        placeholder="status"
        onChange={handleChange}
        name="status"
      />
      <button className={s.btn} onClick={handleClick}>
        Add
      </button>
      <Link to="/orders">
        <button className={s.btn}>Back</button>
      </Link>
    </div>
  );
};

export default AddOrder;
