const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log("Server is running on port 4000 .");
});

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server.");
});

mongoose
  .connect(
    "mongodb+srv://a7med3del1973:node_123@backenddb.tfnv3hl.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("Connected to database sucessfully.");
  })
  .catch(() => {
    console.log("Connection failed !");
  });
