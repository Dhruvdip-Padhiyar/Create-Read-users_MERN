const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    userName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = model("users", userSchema);

module.exports = userModel;
