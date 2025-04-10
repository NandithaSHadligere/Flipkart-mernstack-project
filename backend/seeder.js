const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/productModel");
const products = require("./data/products.json");
const connectDatabase = require("./config/database");

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // optional: clears previous data
    await Product.insertMany(products);
    console.log("✅ Products seeded!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();
