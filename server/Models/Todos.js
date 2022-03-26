const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  compelte: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    tyep: String,
    default: Date.now(),
  },
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
