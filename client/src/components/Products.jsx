import React, { useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const Products = () => {
    const [products,setProducts] = useState([])
  
     
    
    useEffect(() => {
        const fetchAllProds = async () => {
          try {
            const res = await axios.get("http://localhost:8800/products");
            console.log(res.data.length)
            setProducts(res.data);
            

          } catch (err) {
            console.log(err);
          }
        };
        fetchAllProds();
      }, []);


       



      const handleDelete = async (id)=>{
        try {
          await axios.delete("http://localhost:8800/products/" +id);
          window.location.reload();
        } catch (err) {
          console.log(err)
        }
      }



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
              <th>
                <button>
                  <Link to="/add">Add</Link>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                  <button>
                    <Link to={`/update/${product.id}`}>Edit</Link>
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


export default Products