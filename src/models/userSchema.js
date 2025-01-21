import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  name: String,
  surname: String,
  email: String,
  password: String,
  city: String,
  adress: String,
  history: [],
  notifications: [],
});

export default userSchema;
