const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  caption: {              // ✅ FIXED (small c)
    type: String,
    default: "No caption available"
  }
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
