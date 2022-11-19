import express from "express";
import mysql from "mysql";


const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panzerfaust12345",
  database: "blaze",
});

app.get("/", (req, res) => {
  res.json("hello this is the backend!");
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});




app.listen(8800, ()=>{
    console.log("Connected to backend!")
})