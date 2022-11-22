import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [product, setProduct] = useState({
    name:"",
    category:"",
    price:null,
    status:"",
  })

  const navigate = useNavigate()


  const handleChange = (e) => {
    setProduct (prev => ({...prev, [e.target.name]:e.target.value}))
    console.log(product)
  }

  const handleClick = async e =>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/products", product)
      navigate("/")
    } catch(err){
      console.log(err)
    }
  } 

  return (
    <div>
      <h1>Add a new product</h1>
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
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Add