const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

let userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    uniqueString: {
      type: String,
      required: true,
    },
    isValid: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

userSchema.plugin(uniqueValidator, { message: "Email already in use!" });
module.exports = mongoose.model("User", userSchema);
