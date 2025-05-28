import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  thumbnail: String,
  price: Number,
  content: {
    type: [contentSchema],
    required: true,
  },
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default Course;
