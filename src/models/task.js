const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: { type: String, require: true },
  descricao: { type: String, require: true },
  done: { type: Boolean, default: false },
  cheacklist:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Checklist",
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
