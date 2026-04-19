const mongoose = require("mongoose");

async function connectDB(parms){
     await mongoose.connect("mongodb+srv://yt:AtL54bXr05pV0kHq@cluster0.3qxjepm.mongodb.net/")

     console.log("connect to Db successfully");
}

module.exports = connectDB;