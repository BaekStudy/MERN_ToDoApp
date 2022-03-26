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
  res.json(todos);
});

app.post("/todo", (req, res) => {
  const todo = new TodoModel({
    text: req.body.text,
  });

  todo.save();
  res.json(todo);
});

app.delete("/todo/:id", async (req, res) => {
  const result = await TodoModel.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.listen(
  process.env.PORT,
  console.log(`http://localhost:${process.env.PORT}`)
);
