import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  age: {
    type: Number,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  gender: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  grade: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  teacherName: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  school: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  activities: [String]
});

const Child = mongoose.model("child", childSchema);

export default Child;
