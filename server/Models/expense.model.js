//Author: Jainil Sevalia(jn498899@dal.ca) || Banner Id: B00925445

const mongoose = require("mongoose");

const exoenseSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trip",
  },
  transactionName: {
    type: String,
    require: true,
  },
  transactionAmount: {
    type: Number,
    require: true,
  },
  sessionId: {
    type: String,
  },
});

module.exports = mongoose.model("expense", exoenseSchema);
