import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8800/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOrders();
  }, []);

  return (
    <div>
      <div className="products">
        <table className="table">
          <thead>
            <tr>
              <th>N°</th>
              <th>Consumer</th>
              <th>Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.id}</td>
                <td>{order.consumer}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{order.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="button">
        <Link to="/add">Create Order</Link>
      </button>
    </div>
  );
};

export default Orders;
