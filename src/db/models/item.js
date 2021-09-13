const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    sparepartCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: "",
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
