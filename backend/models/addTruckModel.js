const mongoose = require("mongoose");

const addTruckSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
    subclassification: {
      type: String,
      required: true,
    },
    plateinformation: {
      type: String,
      required: true,
    },
    RC_certificate: {
      data: { type: Buffer },
      contentType: { type: String, required: true },
    },
    RC_No: {
      type: String,
      required: true,
    },
    Picture_of_vehicle: {
      data: { type: Buffer },
      contentType: { type: String, required: true },
    },
    FC: {
      type: Date,
      required: true,
    },
    Insurance: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const newTruck = mongoose.model("newTruck", addTruckSchema);

module.exports = newTruck;
