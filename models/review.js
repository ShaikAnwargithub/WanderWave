const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Listing = mongoose.model("Listing", reviewSchema);
