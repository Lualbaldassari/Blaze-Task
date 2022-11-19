import React, { useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import   "../styles.css";


const Products = () => {
    const [products,setProducts] = useState([])
     
    
    useEffect(() => {
        const fetchAllProds = async () => {
          try {
            const res = await axios.get("http://localhost:8800/products");
            setProducts(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllProds();
      }, []);


  return (
    <div>
      <div className="products">
        <table className="table">
          <thead>
            <tr>
              <th>N°</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>{product.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="button">
        <Link to="/add">Create Product</Link>
      </button>
    </div>
  );
};


export default Products