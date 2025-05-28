import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
