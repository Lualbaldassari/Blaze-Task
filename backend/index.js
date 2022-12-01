import express from "express";
import mysql from "mysql";
import cors from "cors"
import {pool} from './db.js';
import { DB_PORT, PORT } from "./config.js";


const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panzerfaust12345",
  database: "blaze",
});


app.use(express.json());
app.use(cors());



/* -------------------------------------------------------------------------- */
/*                               PRODUCTS ROUTE                               */
/* -------------------------------------------------------------------------- */


app.get("/", (req, res) => {
  res.json("hello this is the backend!");
});

app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  console.log(result); 
  res.json(result[0])
  
});

/* -------------------------- Get all the products -------------------------- */
app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

/* -------------------------- Create a new product -------------------------- */
app.post("/products", (req, res) => {
  const q = "INSERT INTO products (`name`,`category`,`price`,`status`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.category,
    req.body.price,
    req.body.status,
    
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product has been created successfully");
  });
});

/* ---------------------------- Delete a product ---------------------------- */
app.delete("/products/:id", (req,res) =>{
  const productId = req.params.id;
  const q =" DELETE FROM products WHERE id = ?"

  db.query(q, [productId], (err,data) =>{
    if (err) return res.json(err);
    return res.json("Books has been deleted successfully");
  })


})

/* ---------------------------- Update a product ---------------------------- */
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const q = " UPDATE  products SET `name`= ?, `category` = ?, `price`= ?, `status` = ? WHERE id = ? ";

  const values = [
    req.body.name,
    req.body.category,
    req.body.price,
    req.body.status,
  ];


  db.query(q, [...values, productId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books has been updated successfully");
  });
});





/* -------------------------------------------------------------------------- */
/*                                Orders Route                                */
/* -------------------------------------------------------------------------- */





/* ----------------------------- Get all orders ----------------------------- */
app.get("/orders", (req, res) => {
  const q = "SELECT * FROM orders";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

/* --------------------------- Create a new order --------------------------- */
app.post("/orders", (req, res) => {
  const q =
    "INSERT INTO orders (`consumer`,`status`,`date`,`total`) VALUES (?)";

  const values = [
    req.body.consumer,
    req.body.status,
    req.body.date,
    req.body.total,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("The order has been created successfully");
  });
});

app.get("/orders/:id", (req, res) => {

  const orderId = req.params.id;
  const q = "SELECT * FROM orders WHERE id = ?";
   

  db.query(q, [orderId],(err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});








/* ----------------------------- Delete an order ----------------------------- */
app.delete("/orders/:id", (req, res) => {
  const orderId = req.params.id;
  const q = " DELETE FROM orders WHERE id = ?";

  db.query(q, [orderId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Order has been deleted successfully");
  });
});



/* ----------------------------- Update an order ---------------------------- */
app.put("/orders/:id", (req, res) => {
  const orderId = req.params.id;
  const q =
    " UPDATE  orders SET `consumer`= ?, `status` = ?, `date`= ?, `total` = ? WHERE id = ? ";

  const values = [
    req.body.consumer,
    req.body.status,
    req.body.date,
    req.body.total,
  ];

  db.query(q, [...values, orderId], (err, data) => {
    if (err) return res.json(err);
    return res.json("The order has been updated successfully");
  });
});





app.listen(DB_PORT, ()=>{
    console.log("Connected to backend!")
})