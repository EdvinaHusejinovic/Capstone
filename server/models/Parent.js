import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  age: {
    type: String,
    required: true,
    enum: /^[A-Za-z0-9 ]*$/
  },
  gender: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  grade: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  activities: [String]
});

const Parent = mongoose.model("Habit", parentSchema);

export default Parent;
