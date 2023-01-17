const mongoose = require("mongoose");
const { Schema } = mongoose;

const operationSectorSchema = new Schema(
  {
    name: String,
    createAt: Date,
  },
  {
    collection: "operationSectors",
  }
);

const operationSectorModel = mongoose.model(
  "OperationSector",
  operationSectorSchema
);

module.exports = operationSectorModel;
