import express from "express";
import mysql from "mysql";
import cors from "cors"

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panzerfaust12345",
  database: "blaze",
});


app.use(express.json());
app.use(cors());


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


app.post("/products", (req, res) => {
  const q = "INSERT INTO products (`name`,`category`,`price`,`status`,`actions`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.category,
    req.body.price,
    req.body.status,
    req.body.actions,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product has been created successfully");
  });
});



app.get("/orders", (req, res) => {
  const q = "SELECT * FROM orders";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.post("orders", (req, res) => {
  const q =
    "INSERT INTO orders (`consumer`,`status`,`date`,`total`,`actions`) VALUES (?)";
  const values = [
    req.body.consumer,
    req.body.status,
    req.body.date,
    req.body.total,
    req.body.actions,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(console.log);
    return res.json("The order has been created successfully");
  });
});




app.listen(8800, ()=>{
    console.log("Connected to backend!")
})