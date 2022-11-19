import React, { useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

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
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.status}</p>
            <p>{product.actions}</p>
          </div>
        ))}
      </div>
      <button><Link to="/add">Create Product</Link></button>
    </div>
  );
};


export default Products