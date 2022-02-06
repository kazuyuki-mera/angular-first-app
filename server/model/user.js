const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: [60, "ユーザー名は最大60文字までです"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    max: [60, "Eメールは最大60文字までです"],
  },
  password: {
    type: String,
    required: true,
    min: [6, "60文字以上で入力してください"],
    max: [30, "最大30文字までです"],
  },
});

module.exports = mongoose.model("User", UserSchema);
