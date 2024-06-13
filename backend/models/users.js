const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: Boolean,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
