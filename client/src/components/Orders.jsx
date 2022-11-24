import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";
import NavBar from "./NavBar";

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


  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/orders/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };





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
              <th>
                <button>
                  <Link to="/addOrder">Create Order</Link>
                </button>
              </th>
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
                <td>
                  <button onClick={() => handleDelete(order.id)}>
                    Delete
                  </button>
                  <button>
                    <Link to={`/updateOrder/${order.id}`}>Edit</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <NavBar />
    </div>
  );
};

export default Orders;
