require("dotenv").config();
const express = require("express");
const app = express();

// const port = 3000;
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening to port ${port}!`));

const products = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Orange",
  },
];

app.get("/products", (req, res) => res.status(200).json(products));

app.post("/products", (req, res) =>
  res.status(201).json(products)
);

app.get("/products/:productId", (req, res) =>{
  console.log(req.params);
  product=products.find(p => p.id === parseInt(req.params.productId));
  res.status(200).json(product);
});
