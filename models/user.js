// THIS IS A SAMPLE MODEL FILE

// Import Connection
const mongoose = require("./connection");

// Create a Schema
const userSchema = new mongoose.Schema(
  {
    username: {required: true, unique: true, type: String},
    password: {required: true, type: String}
  },
  { timestamps: true }
);

// Create the Model Object
const User = mongoose.model("User", userSchema)

// export the Model
module.exports = User