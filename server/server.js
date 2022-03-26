const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./Config/connectDB")();

app.use(express.json());
app.use(cors());

app.listen(
  process.env.PORT,
  console.log(`http://localhost:${process.env.PORT}`)
);
