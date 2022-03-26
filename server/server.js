const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./Config/connectDB")();

const TodoModel = require("./Models/Todos");

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const todos = await TodoModel.find();
  res.send("hello");
});

app.listen(
  process.env.PORT,
  console.log(`http://localhost:${process.env.PORT}`)
);
