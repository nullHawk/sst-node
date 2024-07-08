const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const productRoutes = require("./routes/productRoutes");

dotenv.config();

app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_DB_URI,
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Db connection Failed", err);
  });

app.use("/api/products", productRoutes);

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});