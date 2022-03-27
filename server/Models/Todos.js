const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  // 앞으로 timestamp 줄때 이런식으로 하자
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
