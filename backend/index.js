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



/* --------------- Products Route --------------- */




app.get("/", (req, res) => {
  res.json("hello this is the backend!");
});


//Get all the products
app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Create a new product
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

//Delete a product
app.delete("/products/:id", (req,res) =>{
  const productId = req.params.id;
  const q =" DELETE FROM products WHERE id = ?"

  db.query(q, [productId], (err,data) =>{
    if (err) return res.json(err);
    return res.json("Books has been deleted successfully");
  })


})

//Update a product
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





/* --------------- Orders Route --------------- */






app.get("/orders", (req, res) => {
  const q = "SELECT * FROM orders";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


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




app.listen(8800, ()=>{
    console.log("Connected to backend!")
})